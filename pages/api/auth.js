import { validateUser, addUser, getUserByEmail } from '../../lib/users'

export default function handler(req,res){
  if(req.method === 'POST'){
    const { action } = req.query
    if(action === 'login'){
      const { email, password } = req.body || {}
      const user = validateUser(email, password)
      if(!user) return res.status(401).json({ error: 'Invalid credentials' })
      const token = Buffer.from(JSON.stringify({ id: user.id, email: user.email, role: user.role, name: user.name, ts: Date.now() })).toString('base64')
      return res.status(200).json({ user, token })
    }
    if(action === 'register'){
      const { name, email, password, role } = req.body || {}
      if(getUserByEmail(email)) return res.status(400).json({ error: 'User exists' })
      const out = addUser({ name, email, password, role })
      if(out.error) return res.status(400).json(out)
      const user = out.user
      const token = Buffer.from(JSON.stringify({ id: user.id, email: user.email, role: user.role, name: user.name, ts: Date.now() })).toString('base64')
      const { password: pw, ...san } = user
      return res.status(201).json({ user: san, token })
    }
  }
  res.status(405).json({ error: 'Method not allowed' })
}
