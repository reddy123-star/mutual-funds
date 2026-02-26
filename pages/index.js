import Nav from '../components/Nav'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

export default function Home(){
  // background image variables and data remain unchanged
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
      <Head>
        <title>MutualFund Pro</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Hero Section */}
      <div className="hero">
        <div className="container hero-content">
          <h1>📊 Master Your Mutual Fund Investments</h1>
          <p>A comprehensive platform to understand, compare, and manage mutual funds with expert insights and data-driven analytics.</p>
          <div className="hero-buttons">
            <Link href="/funds"><a className="btn btn-primary">Explore Funds</a></Link>
            <Link href="/register"><a className="btn btn-secondary" style={{marginLeft: 12}}>Sign&nbsp;Up</a></Link>
          </div>
        </div>
      </div>

      <main>
        <div className="container">
          
          {/* Why Choose Us */}
          <section className="section-features">
            <div className="section-header">
              <h2>Everything You Need to Invest Wisely</h2>
              <p>Comprehensive tools and insights for informed investment decisions</p>
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
          <section className="section-steps">
            <h2 className="section-title">How MutualFund Pro Works</h2>
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
          <section className="section-popular">
            <h2 className="section-title">Popular Funds You Can Invest In</h2>
            <div className="slider">
              <div className="slider-container">
                {popularFunds.map((f, i) => (
                  <div key={i} className="slider-item">
                    <h3 className="fund-name">{f.name}</h3>
                    <p className="fund-stats">
                      <strong>1 Year Return:</strong> <br /> <span className="fund-return">{f.returns}</span>
                    </p>
                    <p className="fund-risk">Risk Level: {f.risk}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="centered-cta">
              <Link href="/funds"><a className="btn btn-primary">View All Funds →</a></Link>
            </div>
          </section>

          {/* Key Features */}
          <section className="section-benefits">
            <h2 className="section-title">Why Choose MutualFund Pro?</h2>
            <div className="benefits-grid">
              <div className="card benefit" style={{borderLeft: '4px solid #0b5cff'}}>
                <h4>✨ Advanced Analytics</h4>
                <p>Real-time performance tracking, historical analysis, and predictive insights for smarter investment decisions.</p>
              </div>
              <div className="card benefit" style={{borderLeft: '4px solid var(--primary)'}}>
                <h4>🔐 Secure & Reliable</h4>
                <p>Enterprise-grade security, encrypted data, and reliable infrastructure you can trust with your investments.</p>
              </div>
              <div className="card benefit" style={{borderLeft: '4px solid var(--secondary)'}}>
                <h4>📱 Multi-Device Access</h4>
                <p>Access your portfolios from anywhere, anytime with our responsive, mobile-optimized platform.</p>
              </div>
              <div className="card benefit" style={{borderLeft: '4px solid #f39c12'}}>
                <h4>👨‍💼 Expert Advisory</h4>
                <p>Connect with experienced financial advisors who can guide you through your investment journey.</p>
              </div>
              <div className="card benefit" style={{borderLeft: '4px solid #e74c3c'}}>
                <h4>📊 Data-Driven Reports</h4>
                <p>Detailed performance reports, tax insights, and personalized recommendations based on your profile.</p>
              </div>
              <div className="card benefit" style={{borderLeft: '4px solid #27ae60'}}>
                <h4>🎓 Educational Resources</h4>
                <p>Learn from our comprehensive guides, webinars, and expert articles about mutual fund investing.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-cta">
            <h2>Ready to Start Investing Smarter?</h2>
            <p>Join thousands of investors who are making informed investment decisions with MutualFund Pro</p>
            <div>
              <Link href="/register"><a className="btn btn-secondary" style={{fontSize: '1.1em', padding: '14px 40px'}}>Get Started Today →</a></Link>
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
