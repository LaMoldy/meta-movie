import { comparePasswords, hashPassword } from '../services/passwords'

test('Password should return password hashed and compare correctly', async () => {
  let password = 'something'
  let passwordHash = await hashPassword(password)
  let match = await comparePasswords(password, passwordHash)
  expect(match).toEqual(true)
})
