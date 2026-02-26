import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Nav from '../../components/Nav'

export default function FundDetail(){
  const router = useRouter()
  const { id } = router.query
  const [fund, setFund] = useState(null)

  useEffect(()=>{
    if(!id) return
    fetch(`/api/funds?id=${id}`).then(r=>r.json()).then(setFund)
  },[id])

  if(!fund) return (
    <div>
      <Nav />
      <main style={{padding: 20}}>
        <div style={{textAlign: 'center', paddingTop: 60}}>
          <h2>Loading fund details...</h2>
          <div style={{fontSize: '2em', marginTop: 20}}>⏳</div>
        </div>
      </main>
    </div>
  )

  const getRiskColor = (risk) => {
    if(!risk) return '#0b5cff'
    const r = risk.toLowerCase()
    if(r === 'low') return '#27ae60'
    if(r === 'medium') return '#f39c12'
    if(r === 'high') return '#e74c3c'
    return '#0b5cff'
  }

  return (
    <div>
      <Nav />
      <main>
        <div className="container">
          {/* Header */}
          <div style={{background: 'linear-gradient(135deg, #0b5cff 0%, #0047cc 100%)', padding: '40px', borderRadius: '12px', color: 'white', marginBottom: 40}}>
            <h1 style={{margin: 0, marginBottom: 16, color: 'white'}}>{fund.name}</h1>
            <p style={{opacity: 0.9, marginBottom: 0}}>{fund.description}</p>
          </div>

          {/* Key Metrics */}
          <div className="dashboard-grid" style={{marginBottom: 40}}>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #0b5cff 0%, #0047cc 100%)'}}>
              <h4>Category</h4>
              <div className="value" style={{fontSize: '1.4em'}}>{fund.category}</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>Fund Type</p>
            </div>
            <div className="stat-card" style={{background: `linear-gradient(135deg, ${getRiskColor(fund.risk)}88 0%, ${getRiskColor(fund.risk)} 100%)`}}>
              <h4>Risk Level</h4>
              <div className="value" style={{fontSize: '1.3em'}}>{fund.risk?.toUpperCase()}</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>Risk Profile</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <h4>1 Year Return</h4>
              <div className="value" style={{color: '#4ade80'}}>{fund.returns1Y || 'N/A'}%</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>YTD Performance</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)'}}>
              <h4>Expense Ratio</h4>
              <div className="value" style={{fontSize: '1.3em'}}>{fund.expenseRatio || 'N/A'}%</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>Annual Fee</p>
            </div>
          </div>

          {/* Details */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 40}}>
            <div className="card">
              <h3>📋 Fund Information</h3>
              <p><strong>Category:</strong> {fund.category}</p>
              <p><strong>Structure:</strong> {fund.structure || 'Open-ended'}</p>
              <p><strong>Risk Level:</strong> <span style={{color: getRiskColor(fund.risk), fontWeight: 'bold'}}>{fund.risk?.toUpperCase()}</span></p>
              <p><strong>Expense Ratio:</strong> {fund.expenseRatio}%</p>
              <p><strong>Minimum Investment:</strong> ₹500</p>
            </div>
            <div className="card">
              <h3>📈 Performance</h3>
              <p><strong>1 Year Return:</strong> <span style={{color: '#27ae60', fontWeight: 'bold'}}>+{fund.returns1Y || 'N/A'}%</span></p>
              <p><strong>3 Year Return:</strong> <span style={{color: '#27ae60', fontWeight: 'bold'}}>+{fund.returns3Y || 'N/A'}%</span></p>
              <p><strong>5 Year Return:</strong> <span style={{color: '#27ae60', fontWeight: 'bold'}}>+{fund.returns5Y || 'N/A'}%</span></p>
              <p><strong>AUM:</strong> ₹{Number(fund.aum || 0).toLocaleString('en-IN')}</p>
            </div>
            <div className="card">
              <h3>👥 Fund Manager</h3>
              <p><strong>Name:</strong> {fund.fundManager || 'John Smith'}</p>
              <p><strong>Experience:</strong> 12+ years</p>
              <p><strong>Expertise:</strong> {fund.category} Markets</p>
              <button className="btn" style={{marginTop: 12, width: '100%'}}>Connect with Advisor</button>
            </div>
          </div>

          {/* Description */}
          <div className="card" style={{marginBottom: 40}}>
            <h3>About This Fund</h3>
            <p>{fund.description}</p>
            <p style={{color: '#666', marginTop: 20}}>
              This fund aims to provide growth through a diversified portfolio of securities. 
              Suitable for investors looking for long-term wealth creation with moderate to high risk tolerance.
            </p>
          </div>

          {/* CTA */}
          <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px', borderRadius: '12px', textAlign: 'center', color: 'white', marginBottom: 40}}>
            <h2 style={{color: 'white', marginBottom: 16}}>Ready to Invest?</h2>
            <p style={{fontSize: '1.1em', opacity: 0.95, marginBottom: 24}}>Start your mutual fund investment journey with just ₹500</p>
            <button className="btn" style={{background: 'white', color: '#667eea', fontSize: '1.1em', padding: '14px 40px'}}>Invest Now</button>
          </div>
        </div>
      </main>
    </div>
  )
}
