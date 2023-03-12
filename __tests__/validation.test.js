import { isEmailAndPasswordValid, isEmailValid } from '../services/validation'

test('isEmailAndPasswordValid should return email empty message', () => {
  let email = ''
  let password = 'admin'
  let isValid = isEmailAndPasswordValid(email, password)

  let expectedResult = 'Email cannot be empty'

  expect(isValid).toEqual(expectedResult)
})

test('isEmailAndPasswordValid should return password empty message', () => {
  let email = 'test'
  let password = ''
  let isValid = isEmailAndPasswordValid(email, password)

  let expectedResult = 'Password cannot be empty'

  expect(isValid).toEqual(expectedResult)
})

test('isEmailAndPasswordValid should return empty message', () => {
  let email = 'test'
  let password = 'test'
  let isValid = isEmailAndPasswordValid(email, password)

  expect(isValid).toEqual('')
})

test('valid email should return true', () => {
  let email = 'test@testing.com'
  let isValid = isEmailValid(email)

  expect(isValid).toBeTruthy()
})

test('valid email should return false', () => {
  let email = 'test@testing'
  let isValid = isEmailValid(email)

  expect(isValid).toBeFalsy()
})
