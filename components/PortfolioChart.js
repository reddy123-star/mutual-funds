import { useEffect, useRef } from 'react'

export default function PortfolioChart({ data, type = 'line' }){
  const canvas = useRef(null)
  
  useEffect(() => {
    if(!canvas.current) return
    
    const ctx = canvas.current.getContext('2d')
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    
    const width = canvas.current.width
    const height = canvas.current.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2
    
    // Draw grid
    ctx.strokeStyle = '#e0e6ed'
    ctx.lineWidth = 1
    for(let i = 0; i <= 5; i++){
      const y = padding + (chartHeight / 5) * i
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()
    }
    
    // Draw axes
    ctx.strokeStyle = '#333'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()
    
    // Draw data
    if(data && data.length > 0){
      const maxValue = Math.max(...data.map(d => d.value))
      const step = chartWidth / (data.length - 1)
      
      // Draw line
      ctx.strokeStyle = '#0b5cff'
      ctx.lineWidth = 3
      ctx.beginPath()
      
      data.forEach((point, i) => {
        const x = padding + step * i
        const y = height - padding - (point.value / maxValue) * chartHeight
        
        if(i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      })
      ctx.stroke()
      
      // Draw points
      ctx.fillStyle = '#0b5cff'
      data.forEach((point, i) => {
        const x = padding + step * i
        const y = height - padding - (point.value / maxValue) * chartHeight
        
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      })
    }
  }, [data])
  
  return (
    <canvas 
      ref={canvas} 
      width={600} 
      height={300}
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
        border: 'none',
        borderRadius: '8px'
      }}
    />
  )
}
