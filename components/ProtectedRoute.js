import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getSession } from '../lib/auth'

export default function ProtectedRoute({ children, roles }){
  const router = useRouter()
  const [ready, setReady] = useState(false)
  useEffect(()=>{
    const s = getSession()
    if(!s.user){
      router.push('/login')
      return
    }
    if(roles && roles.length>0 && !roles.includes(s.user.role)){
      router.push('/')
      return
    }
    setReady(true)
  },[])
  if(!ready) return null
  return children
}
