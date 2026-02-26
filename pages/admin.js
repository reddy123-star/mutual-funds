import Nav from '../components/Nav'
import ProtectedRoute from '../components/ProtectedRoute'
import { useEffect, useState } from 'react'

function AdminContent(){
  const [tab, setTab] = useState('dashboard')
  const [stats, setStats] = useState({totalUsers: 1250, activeFunds: 50, totalAUM: 250000000, pendingReviews: 8})

  return (
    <div>
      <Nav />
      <main>
        <div className="container">
          <h2>⚙️ Admin Dashboard</h2>

          {/* Stats */}
          <div className="dashboard-grid" style={{marginBottom: 40}}>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #0b5cff 0%, #0047cc 100%)'}}>
              <h4>Total Users</h4>
              <div className="value">{stats.totalUsers.toLocaleString()}</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>+125 this month</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <h4>Active Funds</h4>
              <div className="value">{stats.activeFunds}</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>5 pending approval</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)'}}>
              <h4>Total AUM</h4>
              <div className="value">₹{(stats.totalAUM/10000000).toFixed(0)}Cr</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>Under management</p>
            </div>
            <div className="stat-card" style={{background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'}}>
              <h4>Pending Reviews</h4>
              <div className="value">{stats.pendingReviews}</div>
              <p style={{margin: '8px 0 0 0', opacity: 0.9}}>Advisor content</p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{display: 'flex', gap: '12px', marginBottom: 32, borderBottom: '2px solid #e0e6ed'}}>
            {['dashboard', 'funds', 'users', 'reports', 'content'].map(t => (
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
                {t === 'dashboard' && '📊'} {t}
              </button>
            ))}
          </div>

          {/* Dashboard Tab */}
          {tab === 'dashboard' && (
            <div>
              <h3 style={{marginBottom: 24}}>Platform Overview</h3>
              <div className="features-grid" style={{marginBottom: 40}}>
                <div className="card">
                  <h4>👥 User Management</h4>
                  <p>Monitor and manage all user accounts, roles, and permissions across the platform.</p>
                  <a href="#" style={{color: '#0b5cff', fontWeight: 600}}>View Users →</a>
                </div>
                <div className="card">
                  <h4>💰 Fund Management</h4>
                  <p>Add, edit, or remove mutual funds from the platform database.</p>
                  <a href="#" style={{color: '#0b5cff', fontWeight: 600}}>Manage Funds →</a>
                </div>
                <div className="card">
                  <h4>📋 Content Review</h4>
                  <p>Review and approve advisor recommendations and educational content.</p>
                  <a href="#" style={{color: '#0b5cff', fontWeight: 600}}>Review Content →</a>
                </div>
              </div>
            </div>
          )}

          {/* Funds Tab */}
          {tab === 'funds' && (
            <div>
              <h3 style={{marginBottom: 24}}>Fund Management</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Fund Name</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>AUM (₹)</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Equity Growth Fund</strong></td>
                      <td>Equity</td>
                      <td><span className="badge badge-success">Active</span></td>
                      <td>₹5,00,00,000</td>
                      <td><button className="btn btn-small">Edit</button> <button className="btn btn-small btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                      <td><strong>Balanced Growth Fund</strong></td>
                      <td>Hybrid</td>
                      <td><span className="badge badge-success">Active</span></td>
                      <td>₹3,50,00,000</td>
                      <td><button className="btn btn-small">Edit</button> <button className="btn btn-small btn-danger">Delete</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {tab === 'users' && (
            <div>
              <h3 style={{marginBottom: 24}}>User Directory</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Joined</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Rajesh Kumar</strong></td>
                      <td>rajesh@example.com</td>
                      <td>Investor</td>
                      <td>Jan 2024</td>
                      <td><span className="badge badge-success">Active</span></td>
                    </tr>
                    <tr>
                      <td><strong>Priya Singh</strong></td>
                      <td>priya@example.com</td>
                      <td>Advisor</td>
                      <td>Dec 2023</td>
                      <td><span className="badge badge-success">Active</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {tab === 'reports' && (
            <div>
              <h3 style={{marginBottom: 24}}>Analytics & Reports</h3>
              <div className="features-grid">
                <div className="card">
                  <h4>📈 User Growth</h4>
                  <p>New users: +125</p>
                  <p>Active users: {stats.totalUsers}</p>
                </div>
                <div className="card">
                  <h4>💰 Investment Metrics</h4>
                  <p>Total AUM: ₹{(stats.totalAUM/10000000).toFixed(0)}Cr</p>
                  <p>Average portfolio: ₹{Math.round(stats.totalAUM/stats.totalUsers).toLocaleString()}</p>
                </div>
                <div className="card">
                  <h4>🎯 Fund Performance</h4>
                  <p>Top fund: Equity Growth Fund</p>
                  <p>ROI: 15.2%</p>
                </div>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {tab === 'content' && (
            <div>
              <h3 style={{marginBottom: 24}}>Content Moderation</h3>
              <div className="alert alert-warning">
                <strong>{stats.pendingReviews} pending reviews</strong> - {stats.pendingReviews} advisor recommendations awaiting approval
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Content</th>
                      <th>Advisor</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Investment strategy for beginners</td>
                      <td>Priya Singh</td>
                      <td>Today</td>
                      <td><button className="btn btn-small">Approve</button> <button className="btn btn-small btn-danger">Reject</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default function Admin(){
  return (
    <ProtectedRoute roles={["Admin"]}>
      <AdminContent />
    </ProtectedRoute>
  )
}
