import { getUsers, addUser } from '../../lib/users'

export default function handler(req,res){
  if(req.method === 'GET'){
    const users = getUsers().map(u=>{
      const { password, ...rest } = u
      return rest
    })
    return res.status(200).json(users)
  }
  if(req.method === 'POST'){
    const { name, email, password, role } = req.body || {}
    const out = addUser({ name, email, password, role })
    if(out.error) return res.status(400).json(out)
    const { password: pw, ...san } = out.user
    return res.status(201).json(san)
  }
  res.status(405).json({ error: 'Method not allowed' })
}
