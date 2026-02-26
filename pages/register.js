import { useState } from 'react'
import Nav from '../components/Nav'
import { saveSession } from '../lib/auth'
import { useRouter } from 'next/router'

export default function Register(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('Investor')
  const [error, setError] = useState(null)
  const router = useRouter()

  async function submit(e){
    e.preventDefault()
    setError(null)
    const res = await fetch('/api/auth?action=register',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, email, password, role }) })
    const data = await res.json()
    if(!res.ok){ setError(data.error || 'Register failed'); return }
    saveSession(data.user, data.token)
    return router.push('/')
  }

  return (
    <div>
      <Nav />
      <main style={{padding:20}}>
        <h2>Register</h2>
        <form onSubmit={submit} style={{maxWidth:480}}>
          <div><label>Name</label><br/><input value={name} onChange={e=>setName(e.target.value)} /></div>
          <div><label>Email</label><br/><input value={email} onChange={e=>setEmail(e.target.value)} /></div>
          <div><label>Password</label><br/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
          <div><label>Role</label><br/>
            <select value={role} onChange={e=>setRole(e.target.value)}>
              <option>Investor</option>
              <option>Advisor</option>
              <option>Analyst</option>
            </select>
          </div>
          <div style={{marginTop:10}}>
            <button>Create account</button>
          </div>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </main>
    </div>
  )
}
