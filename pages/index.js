import Nav from '../components/Nav'
import Link from 'next/link'
import { useState } from 'react'

export default function Home(){
  const [email, setEmail] = useState('')

  const features = [
    { icon: '📊', title: 'Detailed Analysis', desc: 'Comprehensive fund data including structure, performance metrics, and risk profiles' },
    { icon: '🔄', title: 'Easy Comparison', desc: 'Compare multiple funds side-by-side to find the best options for your goals' },
    { icon: '💼', title: 'Expert Guidance', desc: 'Personalized recommendations from financial advisors who understand your profile' },
    { icon: '📈', title: 'Real-time Updates', desc: 'Latest fund performance data, market trends, and investment insights' },
    { icon: '🛡️', title: 'Risk Assessment', desc: 'Understand fund risks and volatility patterns for smart portfolio building' },
    { icon: '👥', title: 'Multi Role Support', desc: 'Tailored experiences for investors, advisors, analysts, and administrators' }
  ]

  const steps = [
    { num: '1', title: 'Create Account', desc: 'Sign up as an investor, advisor, or analyst' },
    { num: '2', title: 'Explore Funds', desc: 'Browse our comprehensive fund database' },
    { num: '3', title: 'Analyze & Compare', desc: 'Use our tools to find your perfect fit' },
    { num: '4', title: 'Invest & Track', desc: 'Monitor your investments in real-time' }
  ]

  const popularFunds = [
    { name: 'Equity Growth Fund', returns: '15.2%', risk: 'High' },
    { name: 'Balanced Growth Fund', returns: '12.5%', risk: 'Medium' },
    { name: 'Debt Fund', returns: '8.3%', risk: 'Low' },
    { name: 'Index Fund', returns: '14.8%', risk: 'High' },
    { name: 'Hybrid Fund', returns: '10.5%', risk: 'Medium' }
  ]

  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <h1>📊 Master Your Mutual Fund Investments</h1>
          <p>A comprehensive platform to understand, compare, and manage mutual funds with expert insights and data-driven analytics.</p>
          <div style={{marginTop: 24}}>
            <Link href="/funds"><a className="btn">Explore Funds</a></Link>
            <Link href="/register"><a className="btn" style={{background: 'rgba(255,255,255,0.2)', borderBottom: '2px solid white', marginLeft: 12}}>Sign Up</a></Link>
          </div>
        </div>
      </div>

      <main>
        <div className="container">
          
          {/* Why Choose Us */}
          <section style={{marginTop: 60, marginBottom: 80}}>
            <div style={{textAlign: 'center', marginBottom: 50}}>
              <h2>Everything You Need to Invest Wisely</h2>
              <p style={{fontSize: '1.1em', color: '#666', maxWidth: '600px', margin: '16px auto 0'}}>Comprehensive tools and insights for informed investment decisions</p>
            </div>
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i} className="feature-card">
                  <div className="icon">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section style={{marginBottom: 80, background: 'linear-gradient(135deg, #f8fbff 0%, #f0f5ff 100%)', padding: '60px 40px', borderRadius: '16px'}}>
            <h2 style={{textAlign: 'center', marginBottom: 50}}>How MutualFund Pro Works</h2>
            <div className="steps-container">
              {steps.map((s, i) => (
                <div key={i} className="step">
                  <div className="step-number">{s.num}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Funds Section */}
          <section style={{marginBottom: 80}}>
            <h2 style={{textAlign: 'center', marginBottom: 40}}>Popular Funds You Can Invest In</h2>
            <div className="slider">
              <div className="slider-container">
                {popularFunds.map((f, i) => (
                  <div key={i} className="slider-item">
                    <h3 style={{marginTop: 0}}>{f.name}</h3>
                    <p style={{fontSize: '0.95em', opacity: 0.9, margin: '8px 0'}}>
                      <strong>1 Year Return:</strong> <br /> <span style={{fontSize: '1.5em', fontWeight: 'bold'}}>{f.returns}</span>
                    </p>
                    <p style={{opacity: 0.8, margin: 0}}>Risk Level: {f.risk}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: 24}}>
              <Link href="/funds"><a className="btn">View All Funds →</a></Link>
            </div>
          </section>

          {/* Key Features */}
          <section style={{marginBottom: 80}}>
            <h2 style={{textAlign: 'center', marginBottom: 40}}>Why Choose MutualFund Pro?</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24}}>
              <div className="card" style={{borderLeft: '4px solid #0b5cff'}}>
                <h4>✨ Advanced Analytics</h4>
                <p>Real-time performance tracking, historical analysis, and predictive insights for smarter investment decisions.</p>
              </div>
              <div className="card" style={{borderLeft: '4px solid #667eea'}}>
                <h4>🔐 Secure & Reliable</h4>
                <p>Enterprise-grade security, encrypted data, and reliable infrastructure you can trust with your investments.</p>
              </div>
              <div className="card" style={{borderLeft: '4px solid #764ba2'}}>
                <h4>📱 Multi-Device Access</h4>
                <p>Access your portfolios from anywhere, anytime with our responsive, mobile-optimized platform.</p>
              </div>
              <div className="card" style={{borderLeft: '4px solid #f39c12'}}>
                <h4>👨‍💼 Expert Advisory</h4>
                <p>Connect with experienced financial advisors who can guide you through your investment journey.</p>
              </div>
              <div className="card" style={{borderLeft: '4px solid #e74c3c'}}>
                <h4>📊 Data-Driven Reports</h4>
                <p>Detailed performance reports, tax insights, and personalized recommendations based on your profile.</p>
              </div>
              <div className="card" style={{borderLeft: '4px solid #27ae60'}}>
                <h4>🎓 Educational Resources</h4>
                <p>Learn from our comprehensive guides, webinars, and expert articles about mutual fund investing.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{background: 'linear-gradient(135deg, #0b5cff 0%, #0047cc 100%)', padding: '80px 40px', borderRadius: '16px', textAlign: 'center', color: 'white', marginBottom: 40}}>
            <h2 style={{color: 'white', marginBottom: 16}}>Ready to Start Investing Smarter?</h2>
            <p style={{fontSize: '1.1em', opacity: 0.95, marginBottom: 32, maxWidth: '600px', margin: '0 auto 32px'}}>
              Join thousands of investors who are making informed investment decisions with MutualFund Pro
            </p>
            <div>
              <Link href="/register"><a className="btn" style={{background: 'white', color: '#0b5cff', fontSize: '1.1em', padding: '14px 40px'}}>Get Started Today →</a></Link>
            </div>
          </section>

        </div>
      </main>

      <style jsx>{`
        section {
          animation: fadeIn 0.8s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
