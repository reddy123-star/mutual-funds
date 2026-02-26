import { useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import FundCard from '../../components/FundCard'

export default function FundsPage(){
  const [funds, setFunds] = useState([])
  const [q, setQ] = useState('')
  useEffect(()=>{
    fetch('/api/funds').then(r=>r.json()).then(setFunds)
  },[])
  async function handleSearch(e){
    e.preventDefault()
    const res = await fetch(`/api/funds?q=${encodeURIComponent(q)}`)
    const list = await res.json()
    setFunds(list)
  }
  return (
    <div>
      <Nav />
      <main>
        <div className="container">
          <h2>🔍 Explore Mutual Funds</h2>
          <form onSubmit={handleSearch} className="form-group" style={{marginBottom:24, display:'flex', gap:'8px'}}>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by fund name or category..." style={{flex:1}} />
            <button type="submit" className="btn" style={{width:'auto', whiteSpace:'nowrap'}}>Search</button>
          </form>
          {funds.length===0 ? (
            <div className="alert alert-warning">
              <strong>No funds found.</strong> Try a different search or <a href="/funds" style={{color:'inherit', textDecoration:'underline'}}>browse all funds</a>.
            </div>
          ) : (
            <div className="grid">
              {funds.map(f=> <FundCard key={f.id} fund={f} />)}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
