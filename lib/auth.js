export function saveSession(user, token){
  try{ localStorage.setItem('mf_user', JSON.stringify(user)); localStorage.setItem('mf_token', token); }catch(e){}
}

export function clearSession(){
  try{ localStorage.removeItem('mf_user'); localStorage.removeItem('mf_token'); }catch(e){}
}

export function getSession(){
  try{ const u = JSON.parse(localStorage.getItem('mf_user')||'null'); const t = localStorage.getItem('mf_token'); return { user: u, token: t } }catch(e){ return { user:null, token:null } }
}

export function isAuthenticated(){
  const s = getSession()
  return !!(s.user && s.token)
}
