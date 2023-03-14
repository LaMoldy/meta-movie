import bcrypt from 'bcryptjs'

const SALT_ROUNDS = 10

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS)
  const hashed = await bcrypt.hash(password, salt)
  return hashed
}

export async function comparePasswords(typedPassword, userPassword) {
  const match = await bcrypt.compare(typedPassword, userPassword)
  return match
}
