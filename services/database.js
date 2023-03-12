export async function getUser(email) {
  const res = await fetch(`api/users/find/${email}`)
  const data = await res.json()
  return data
}
