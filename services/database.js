export async function getUser(email) {
  const res = await fetch(`/api/users/find/${email}`)
  const data = await res.json()
  return data
}

export async function createUser(email, password) {
  const res = await fetch(`/api/users/create/${email}/${password}`)
  const data = await res.json()
  return data
}

export async function updateUser(id, name, profileUrl) {
  const res = await fetch(`/api/users/update/${id}/${name}/${profileUrl}`)
  const data = await res.json()
  return data
}

export async function getAllGenres() {
  const res = await fetch("/api/genres/find/genres")
  const data = await res.json()
  return data
}

export async function createMovie(
  name,
  imageUrl,
  director,
  description,
  rating,
  genreId
) {
  const res = await fetch(
    `/api/movies/create/${name}/${director}/${description}/${imageUrl}/${rating}/${genreId}`
  )
  const data = await res.json()
  return data
}

export async function getAllMovies() {
  const res = await fetch(`/api/movies/find/movies`)
  const data = await res.json()
  return data
}

export async function getMovie(id) {
  const res = await fetch(`/api/movies/find/${id}`)
  const data = await res.json()
  return data
}
