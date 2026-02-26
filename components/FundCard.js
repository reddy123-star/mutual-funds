import Link from 'next/link'

export default function FundCard({fund}){
  const getRiskColor = (risk) => {
    if(!risk) return '#666';
    const r = risk.toLowerCase();
    if(r === 'low') return '#27ae60';
    if(r === 'medium') return '#f39c12';
    if(r === 'high') return '#e74c3c';
    return '#666';
  };

  const getCategoryColor = (cat) => {
    if(!cat) return '#e0e6ed';
    const c = cat.toLowerCase();
    if(c.includes('equity')) return '#e3f2fd';
    if(c.includes('debt')) return '#f3e5f5';
    if(c.includes('hybrid')) return '#fff3e0';
    if(c.includes('index')) return '#f1f8e9';
    return '#eceff1';
  };

  return (
    <div className="card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12}}>
        <div style={{flex:1}}>
          <h3 style={{margin:0, marginBottom:8}}>{fund.name}</h3>
          <div style={{display:'flex', gap:'8px', alignItems:'center', flexWrap:'wrap'}}>
            <span className="badge badge-primary">{fund.category || 'N/A'}</span>
            <span className={`badge ${fund.risk?.toLowerCase() === 'low' ? 'badge-success' : fund.risk?.toLowerCase() === 'medium' ? 'badge-warning' : 'badge-danger'}`}>
              {fund.risk?.charAt(0).toUpperCase() + fund.risk?.slice(1) || 'N/A'}
            </span>
          </div>
        </div>
      </div>
      <p style={{margin:'12px 0', color:'#555', fontSize:'0.95em', lineHeight:'1.5'}}>{fund.description || 'No description available'}</p>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginTop:16, paddingTop:12, borderTop:'1px solid #e0e6ed'}}>
        <div>
          <small style={{color:'#7f8c8d', display:'block', marginBottom:4}}>AUM (Assets)</small>
          <strong style={{fontSize:'1.1em'}}>₹{Number(fund.aum || 0).toLocaleString('en-IN', {maximumFractionDigits:0})}</strong>
        </div>
        <div style={{textAlign:'right'}}>
          <Link href={`/funds/${fund.id}`}><a className="btn" style={{width:'100%', textAlign:'center', textDecoration:'none'}}>View Details →</a></Link>
        </div>
      </div>
    </div>
  )
}
