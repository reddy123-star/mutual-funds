export const funds = [
  {
    id: 'f1',
    name: 'BlueChip Growth Fund',
    category: 'Equity',
    aum: 420000000,
    expenseRatio: 0.85,
    structure: 'Open-ended; Actively managed by BlueCapital AMC',
    risk: 'High',
    description: 'A large-cap oriented equity fund focused on growth companies.',
    returns: [
      { period: '1Y', value: 0.12 },
      { period: '3Y', value: 0.35 },
      { period: '5Y', value: 0.85 }
    ],
    factors: ['Market cap', 'Earnings growth', 'Expense ratio']
  },
  {
    id: 'f2',
    name: 'Secure Income Fund',
    category: 'Debt',
    aum: 210000000,
    expenseRatio: 0.45,
    structure: 'Open-ended; Income-oriented debt fund',
    risk: 'Low-Medium',
    description: 'Aims for regular income with lower volatility using government and corporate bonds.',
    returns: [
      { period: '1Y', value: 0.05 },
      { period: '3Y', value: 0.18 },
      { period: '5Y', value: 0.40 }
    ],
    factors: ['Interest rate sensitivity', 'Credit quality', 'Duration']
  },
  {
    id: 'f3',
    name: 'Balanced Advantage Fund',
    category: 'Hybrid',
    aum: 150000000,
    expenseRatio: 0.65,
    structure: 'Dynamic asset allocation across equity and debt',
    risk: 'Medium',
    description: 'Adaptive allocation to maintain a balance between growth and stability.',
    returns: [
      { period: '1Y', value: 0.08 },
      { period: '3Y', value: 0.25 },
      { period: '5Y', value: 0.60 }
    ],
    factors: ['Allocation strategy', 'Volatility management', 'Expense ratio']
  },
  {
    id: 'f4',
    name: 'International Opportunities',
    category: 'Equity - International',
    aum: 98000000,
    expenseRatio: 1.05,
    structure: 'Open-ended; Invests in global equities',
    risk: 'High',
    description: 'Gives investors exposure to non-domestic growth companies and diversification benefits.',
    returns: [
      { period: '1Y', value: 0.15 },
      { period: '3Y', value: 0.45 },
      { period: '5Y', value: 0.95 }
    ],
    factors: ['Currency risk', 'Geopolitical exposure', 'Expense ratio']
  }
]

export function getFunds(){
  return funds
}

export function getFundById(id){
  return funds.find(f=>f.id===id) || null
}

export function searchFunds(query){
  if(!query) return funds
  const q = query.toLowerCase()
  return funds.filter(f=> f.name.toLowerCase().includes(q) || f.category.toLowerCase().includes(q))
}
