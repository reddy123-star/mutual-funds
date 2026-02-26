import Link from 'next/link'
import { useEffect, useState } from 'react'
import { clearSession, getSession } from '../lib/auth'

export default function Nav(){
  const [user, setUser] = useState(null)
  useEffect(()=>{
    try{ const s=getSession(); setUser(s.user);}catch(e){}
  },[])
  function logout(){ clearSession(); window.location.href='/' }
  return (
    <nav>
      <div className="container">
        <Link href="/"><a className="brand">📊 MutualFunds</a></Link>
        <div className="nav-links">
          <Link href="/funds"><a>Explore Funds</a></Link>
          <Link href="/funds/compare"><a>Compare</a></Link>
          {user && user.role === 'Advisor' && <Link href="/advisor"><a>Advisor Hub</a></Link>}
          {user && user.role === 'Analyst' && <Link href="/analyst"><a>Analytics</a></Link>}
          {user && user.role === 'Admin' && <Link href="/admin"><a>Admin Panel</a></Link>}
        </div>
        <div className="nav-right">
          {user ? (
            <>
              <span style={{fontSize:'0.9em'}}>{user.name} <span style={{opacity:0.8}}>({user.role})</span></span>
              <button className="btn" onClick={logout} style={{padding:'8px 16px'}}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login"><a style={{marginRight:0}}>Login</a></Link>
              <Link href="/register"><a className="btn" style={{padding:'8px 16px'}}>Sign Up</a></Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
