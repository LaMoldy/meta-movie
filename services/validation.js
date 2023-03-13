import { getUser } from '../services/database'

export function isEmailAndPasswordValid(email, password) {
  if (email === '' || email === null || email === undefined) {
    return 'Email cannot be empty'
  }

  if (password === '' || password === null || password === undefined) {
    return 'Password cannot be empty'
  }

  return ''
}

export function isEmailValid(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  return regex.test(email)
}

export async function isEmailTaken(email) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      let user = await getUser(email)
      console.log("User:", user)
      if (user === null) {
        resolve()
      } else {
        reject()
      }
    }, 3000)
  })
}

export function validateEmailPasswordForm(email, password) {
  let message = ''

  if (isEmailAndPasswordValid(email, password) !== '') {
    message = isEmailAndPasswordValid(email, password)
  } else if (!isEmailValid(email)) {
    message = 'Email is not valid'
  }

  return message
}
