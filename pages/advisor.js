import Nav from '../components/Nav'
import ProtectedRoute from '../components/ProtectedRoute'
import { useState } from 'react'

function AdvisorContent(){
  const [tab, setTab] = useState('clients')
  const [recommendations, setRecommendations] = useState([
    { id: 1, client: 'Rajesh Kumar', fund: 'Equity Growth Fund', date: 'Today', status: 'Sent' },
    { id: 2, client: 'Priya Singh', fund: 'Balanced Growth Fund', date: 'Yesterday', status: 'Accepted' }
  ])

  return (
    <div>
      <Nav />
      <main>
        <div className="container">
          <h2>💼 Financial Advisor Hub</h2>

          {/* Stats */}
          <div className="dashboard-grid" style={{marginBottom: 40}}>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #0b5cff 0%, #0047cc 100%)'}}>
              <h4>Active Clients</h4>
              <div className="value">24</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>+3 this month</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <h4>Recommendations</h4>
              <div className="value">12</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>This month</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)'}}>
              <h4>Articles Published</h4>
              <div className="value">8</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>Educational content</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)'}}>
              <h4>Client Satisfaction</h4>
              <div className="value">4.8/5</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>Average rating</p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{display: 'flex', gap: '12px', marginBottom: 32, borderBottom: '2px solid #e0e6ed'}}>
            {['clients', 'recommendations', 'content', 'insights'].map(t => (
              <button 
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: '12px 24px',
                  background: tab === t ? '#0b5cff' : 'transparent',
                  color: tab === t ? 'white' : '#555',
                  border: 'none',
                  borderBottom: tab === t ? '3px solid #0b5cff' : 'none',
                  cursor: 'pointer',
                  fontSize: '1em',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  transition: 'all 0.3s'
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Client Management Tab */}
          {tab === 'clients' && (
            <div>
              <h3 style={{marginBottom: 24}}>Your Clients</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Client Name</th>
                      <th>Portfolio Value</th>
                      <th>Risk Profile</th>
                      <th>Last Contact</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Rajesh Kumar</strong></td>
                      <td>₹50,00,000</td>
                      <td><span className="badge badge-warning">Medium</span></td>
                      <td>2 days ago</td>
                      <td><button className="btn btn-small">Message</button></td>
                    </tr>
                    <tr>
                      <td><strong>Priya Singh</strong></td>
                      <td>₹35,00,000</td>
                      <td><span className="badge badge-danger">High</span></td>
                      <td>Today</td>
                      <td><button className="btn btn-small">Message</button></td>
                    </tr>
                    <tr>
                      <td><strong>Amit Patel</strong></td>
                      <td>₹25,00,000</td>
                      <td><span className="badge badge-success">Low</span></td>
                      <td>5 days ago</td>
                      <td><button className="btn btn-small">Message</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Recommendations Tab */}
          {tab === 'recommendations' && (
            <div>
              <h3 style={{marginBottom: 24}}>Fund Recommendations</h3>
              <button className="btn" style={{marginBottom: 24}}>+ Send New Recommendation</button>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Fund</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recommendations.map(r => (
                      <tr key={r.id}>
                        <td><strong>{r.client}</strong></td>
                        <td>{r.fund}</td>
                        <td>{r.date}</td>
                        <td><span className={`badge badge-${r.status === 'Sent' ? 'warning' : 'success'}`}>{r.status}</span></td>
                        <td><button className="btn btn-small btn-secondary">View</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {tab === 'content' && (
            <div>
              <h3 style={{marginBottom: 24}}>Educational Content</h3>
              <button className="btn" style={{marginBottom: 24}}>+ Create New Article</button>
              <div className="features-grid">
                <div className="card">
                  <h4>📚 Investment Basics</h4>
                  <p>A comprehensive guide for beginners to understand mutual funds and start investing.</p>
                  <p style={{fontSize: '0.85em', color: '#999', marginTop: '12px'}}>Published 2 weeks ago • 1.2K views</p>
                  <button className="btn btn-small">Edit</button>
                </div>
                <div className="card">
                  <h4>💹 Market Trends 2024</h4>
                  <p>Analysis of current market trends and what they mean for your portfolio.</p>
                  <p style={{fontSize: '0.85em', color: '#999', marginTop: '12px'}}>Published 1 week ago • 850 views</p>
                  <button className="btn btn-small">Edit</button>
                </div>
                <div className="card">
                  <h4>🎯 Risk Management</h4>
                  <p>Understanding risk profiles and how to build a balanced portfolio.</p>
                  <p style={{fontSize: '0.85em', color: '#999', marginTop: '12px'}}>Published 3 days ago • 650 views</p>
                  <button className="btn btn-small">Edit</button>
                </div>
              </div>
            </div>
          )}

          {/* Insights Tab */}
          {tab === 'insights' && (
            <div>
              <h3 style={{marginBottom: 24}}>Performance Insights</h3>
              <div className="features-grid">
                <div className="card" style={{borderLeft: '4px solid #0b5cff'}}>
                  <h4>👥 Client Growth</h4>
                  <p style={{fontSize: '1.8em', fontWeight: 'bold', color: '#0b5cff', margin: '16px 0'}}>+3 new clients</p>
                  <p style={{color: '#666'}}>This month compared to last month</p>
                </div>
                <div className="card" style={{borderLeft: '4px solid #667eea'}}>
                  <h4>📈 Success Rate</h4>
                  <p style={{fontSize: '1.8em', fontWeight: 'bold', color: '#667eea', margin: '16px 0'}}>92%</p>
                  <p style={{color: '#666'}}>Recommendation acceptance rate</p>
                </div>
                <div className="card" style={{borderLeft: '4px solid #27ae60'}}>
                  <h4>💰 Portfolio Growth</h4>
                  <p style={{fontSize: '1.8em', fontWeight: 'bold', color: '#27ae60', margin: '16px 0'}}>+18.5%</p>
                  <p style={{color: '#666'}}>Average client portfolio returns</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default function Advisor(){
  return (
    <ProtectedRoute roles={["Advisor"]}>
      <AdvisorContent />
    </ProtectedRoute>
  )
}
