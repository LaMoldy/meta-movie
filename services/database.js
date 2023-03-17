export async function getUser(email) {
  const res = await fetch(`api/users/find/${email}`)
  const data = await res.json()
  return data
}

export async function createUser(email, password) {
  const res = await fetch(`api/users/create/${email}/${password}`)
  const data = await res.json()
  return data
}