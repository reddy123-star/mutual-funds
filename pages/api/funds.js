const funds = [
  {
    id: 1,
    name: 'Equity Growth Fund',
    category: 'Equity',
    structure: 'Open-ended',
    risk: 'high',
    returns1Y: 15.2,
    returns3Y: 12.8,
    returns5Y: 14.5,
    expenseRatio: 1.2,
    aum: 500000000,
    fundManager: 'John Smith',
    description: 'A high-growth equity fund designed for aggressive investors seeking long-term capital appreciation. Invests in large-cap and mid-cap stocks with strong growth potential.'
  },
  {
    id: 2,
    name: 'Balanced Growth Fund',
    category: 'Hybrid',
    structure: 'Open-ended',
    risk: 'medium',
    returns1Y: 12.5,
    returns3Y: 10.2,
    returns5Y: 11.8,
    expenseRatio: 1.0,
    aum: 350000000,
    fundManager: 'Sarah Johnson',
    description: 'A balanced fund with 60% equity and 40% debt allocation. Suitable for moderate investors seeking a mix of growth and stability.'
  },
  {
    id: 3,
    name: 'Debt Fund',
    category: 'Debt',
    structure: 'Open-ended',
    risk: 'low',
    returns1Y: 8.3,
    returns3Y: 7.8,
    returns5Y: 8.2,
    expenseRatio: 0.8,
    aum: 250000000,
    fundManager: 'Michael Chen',
    description: 'Conservative debt fund investing in government securities and high-quality bonds. Ideal for capital preservation and steady income.'
  },
  {
    id: 4,
    name: 'Index Fund',
    category: 'Equity',
    structure: 'Open-ended',
    risk: 'high',
    returns1Y: 14.8,
    returns3Y: 12.5,
    returns5Y: 13.9,
    expenseRatio: 0.5,
    aum: 420000000,
    fundManager: 'David Wilson',
    description: 'Low-cost index fund tracking Nifty 50. Provides market-level returns with minimal expenses for passive investors.'
  },
  {
    id: 5,
    name: 'Hybrid Fund',
    category: 'Hybrid',
    structure: 'Open-ended',
    risk: 'medium',
    returns1Y: 10.5,
    returns3Y: 9.2,
    returns5Y: 10.1,
    expenseRatio: 0.9,
    aum: 180000000,
    fundManager: 'Emily Rodriguez',
    description: 'Flexible hybrid fund with dynamic allocation between equity and debt based on market conditions. Great for balanced portfolios.'
  }
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id, q } = req.query
    
    if (id) {
      const fund = funds.find(f => f.id === parseInt(id))
      return res.status(fund ? 200 : 404).json(fund || { error: 'Fund not found' })
    }
    
    if (q) {
      const search = q.toLowerCase()
      const filtered = funds.filter(f => 
        f.name.toLowerCase().includes(search) || 
        f.category.toLowerCase().includes(search)
      )
      return res.status(200).json(filtered)
    }
    
    return res.status(200).json(funds)
  }
  
  res.status(405).json({ error: 'Method not allowed' })
}
