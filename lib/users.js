const users = [
  { id: 'u1', name: 'Alice Admin', email: 'admin@example.com', password: btoa('password123'), role: 'Admin' },
  { id: 'u2', name: 'Ivan Investor', email: 'investor@example.com', password: btoa('investorpass'), role: 'Investor' },
  { id: 'u3', name: 'Fiona Advisor', email: 'advisor@example.com', password: btoa('advisorpass'), role: 'Advisor' },
  { id: 'u4', name: 'Derek Analyst', email: 'analyst@example.com', password: btoa('analystpass'), role: 'Analyst' }
]

export function getUsers(){
  return users
}

export function getUserByEmail(email){
  return users.find(u=> u.email === email) || null
}

export function getUserById(id){
  return users.find(u=> u.id === id) || null
}

export function addUser({name,email,password,role='Investor'}){
  if(getUserByEmail(email)) return { error: 'User exists' }
  const id = 'u'+(users.length+1)
  const u = { id, name, email, password: btoa(password), role }
  users.push(u)
  return { user: u }
}

export function validateUser(email,password){
  const u = getUserByEmail(email)
  if(!u) return null
  if(u.password === btoa(password)){
    // return sanitized user
    const { password, ...rest } = u
    return rest
  }
  return null
}
