import { useState } from 'react'
import Nav from '../components/Nav'
import { saveSession } from '../lib/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function submit(e){
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/auth?action=login',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, password }) })
      const data = await res.json()
      if(!res.ok){ setError(data.error || 'Login failed'); setLoading(false); return }
      saveSession(data.user, data.token)
      // redirect based on role
      if(data.user.role === 'Admin') return router.push('/admin')
      if(data.user.role === 'Advisor') return router.push('/advisor')
      if(data.user.role === 'Analyst') return router.push('/analyst')
      return router.push('/investor')
    } catch(e) {
      setError(e.message || 'An error occurred')
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />
      <main style={{background: 'linear-gradient(135deg, #f8fbff 0%, #f0f5ff 100%)', minHeight: 'calc(100vh - 80px)'}}>
        <div className="container" style={{maxWidth:'450px', paddingTop:'80px', paddingBottom:'80px'}}>
          <div className="card" style={{boxShadow: '0 8px 32px rgba(11, 92, 255, 0.15)'}}>
            <div style={{textAlign:'center', marginBottom:32}}>
              <h1 style={{color:'#0b5cff', marginBottom:8, fontSize:'1.8em'}}>Welcome Back</h1>
              <p style={{color:'#666', fontSize: '1em'}}>Sign in to your account to access mutual fund investing tools</p>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={submit}>
              <div className="form-group">
                <label style={{fontWeight:600, color: '#2c3e50'}}>Email Address</label>
                <input 
                  type="email"
                  value={email} 
                  onChange={e=>setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  style={{padding: '12px 16px'}}
                />
              </div>
              <div className="form-group">
                <label style={{fontWeight:600, color: '#2c3e50'}}>Password</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={e=>setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  style={{padding: '12px 16px'}}
                />
              </div>
              <button type="submit" className="btn" style={{width:'100%', padding: '14px', fontSize: '1.05em', fontWeight: 600, marginTop: 20}} disabled={loading}>
                {loading ? '🔄 Signing in...' : 'Sign In'}
              </button>
            </form>
            <div style={{textAlign:'center', marginTop: 24, paddingTop: 24, borderTop: '1px solid #e0e6ed'}}>
              <p style={{color:'#666', marginBottom: 16}}>Don't have an account?</p>
              <Link href="/register"><a className="btn btn-secondary" style={{width: '100%', textAlign: 'center', display: 'block', padding: '12px'}}>Create New Account</a></Link>
            </div>
            <div style={{marginTop: 24, padding: 16, background: '#f8fbff', borderRadius: 8}}>
              <p style={{fontSize: '0.9em', color: '#666', margin: 0}}>
                <strong>Demo Credentials:</strong><br/>
                Email: any@example.com<br/>
                Password: demo123
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
