import Nav from '../../components/Nav'
import { useEffect, useState } from 'react'

export default function Compare(){
  const [portfolio, setPortfolio] = useState([])
  useEffect(()=>{
    setPortfolio(JSON.parse(localStorage.getItem('mf_portfolio')||'[]'))
  },[])
  return (
    <div>
      <Nav />
      <main>
        <div className="container">
          <h2>📊 Compare Funds</h2>
          {portfolio.length===0 ? (
            <div className="alert alert-info">
              <strong>No funds to compare yet.</strong> Visit <a href="/funds" style={{color:'inherit', textDecoration:'underline'}}>Explore Funds</a> and add funds to your portfolio to compare them here.
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Fund Name</th>
                    <th>Category</th>
                    <th>Risk Level</th>
                    <th>Expense Ratio</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolio.map(f=> (
                    <tr key={f.id}>
                      <td><strong>{f.name}</strong></td>
                      <td>{f.category}</td>
                      <td>
                        <span className={`badge badge-${f.risk === 'high' ? 'danger' : f.risk === 'medium' ? 'warning' : 'success'}`}>
                          {f.risk?.charAt(0).toUpperCase() + f.risk?.slice(1) || 'N/A'}
                        </span>
                      </td>
                      <td>{f.expenseRatio || 'N/A'}%</td>
                      <td><span className="badge badge-success">In Portfolio</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="action-buttons" style={{marginTop:24}}>
            <a href="/funds" className="btn">Explore More Funds</a>
            <a href="/investor" className="btn btn-secondary">Back to Dashboard</a>
          </div>
        </div>
      </main>
    </div>
  )
}
