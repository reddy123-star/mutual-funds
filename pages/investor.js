import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import ProtectedRoute from '../components/ProtectedRoute'
import PortfolioChart from '../components/PortfolioChart'

function InvestorContent(){
  const [portfolio, setPortfolio] = useState([])
  const [totalInvested, setTotalInvested] = useState(0)
  const [currentValue, setCurrentValue] = useState(0)
  const [gains, setGains] = useState(0)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('mf_portfolio') || '[]')
    setPortfolio(saved)
    
    const total = saved.reduce((sum, p) => sum + (p.amount || 0), 0)
    const current = total * 1.13 // Simulated 13% gains
    setTotalInvested(total)
    setCurrentValue(current)
    setGains(current - total)
  }, [])

  const chartData = [
    { label: 'Jan', value: totalInvested * 0.8 },
    { label: 'Feb', value: totalInvested * 0.85 },
    { label: 'Mar', value: totalInvested * 0.92 },
    { label: 'Apr', value: totalInvested * 0.95 },
    { label: 'May', value: totalInvested * 1.02 },
    { label: 'Jun', value: currentValue }
  ]

  return (
    <div>
      <Nav />
      <main>
        <div className="container">
          <h2>📊 Investor Dashboard</h2>
          
          {/* Stats Cards */}
          <div className="dashboard-grid" style={{marginBottom: 40}}>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #0b5cff 0%, #0047cc 100%)'}}>
              <h4>Total Invested</h4>
              <div className="value">₹{totalInvested.toLocaleString()}</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9, fontSize: '0.9em'}}>Across {portfolio.length} funds</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <h4>Current Value</h4>
              <div className="value">₹{Math.round(currentValue).toLocaleString()}</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9, fontSize: '0.9em'}}>+{((gains/totalInvested)*100).toFixed(1)}%</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)'}}>
              <h4>Total Gains</h4>
              <div className="value" style={{color: '#27ae60'}}>₹{Math.round(gains).toLocaleString()}</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9, fontSize: '0.9em'}}>Unrealized gains</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)'}}>
              <h4>Portfolio Health</h4>
              <div className="value" style={{fontSize: '1.5em'}}>85%</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9, fontSize: '0.9em'}}>Well diversified</p>
            </div>
          </div>

          {/* Chart */}
          {totalInvested > 0 && (
            <div className="chart-card" style={{marginBottom: 40}}>
              <h4>Portfolio Value Trend (6 Months)</h4>
              <PortfolioChart data={chartData} />
            </div>
          )}

          {/* Holdings */}
          {portfolio.length === 0 ? (
            <div className="alert alert-info">
              <strong>No holdings yet.</strong> Visit the <a href="/funds" style={{color:'inherit', textDecoration:'underline'}}>Explore Funds</a> page to add funds to your portfolio.
            </div>
          ) : (
            <div>
              <h3 style={{marginTop: 40, marginBottom: 24}}>Your Holdings ({portfolio.length} funds)</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Fund Name</th>
                      <th>Category</th>
                      <th>Amount Invested</th>
                      <th>Current Value</th>
                      <th>Return</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.map(p=> {
                      const currentVal = (p.amount || 0) * 1.13
                      const gain = currentVal - (p.amount || 0)
                      return (
                        <tr key={p.id}>
                          <td><strong>{p.name}</strong></td>
                          <td>{p.category}</td>
                          <td>₹{(p.amount || 0).toLocaleString()}</td>
                          <td>₹{Math.round(currentVal).toLocaleString()}</td>
                          <td style={{color: '#27ae60', fontWeight: 'bold'}}>+₹{Math.round(gain).toLocaleString()}</td>
                          <td><span className="badge badge-success">Active</span></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="action-buttons" style={{marginTop: 24}}>
                <a href="/funds" className="btn">Add More Funds</a>
                <a href="/funds/compare" className="btn btn-secondary">Compare Funds</a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default function Investor(){
  return (
    <ProtectedRoute roles={["Investor"]}>
      <InvestorContent />
    </ProtectedRoute>
  )
}
