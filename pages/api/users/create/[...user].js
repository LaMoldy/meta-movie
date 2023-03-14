import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../../../../services/passwords'

const prisma = new PrismaClient()

async function handler(req, res) {
  const { user } = req.query

  let hashedPassword = await hashPassword(user[1])

  let newUser = {
    data: {
      name: '',
      email: user[0],
      password: hashedPassword
    }
  }

  try {
    await prisma.user.create(newUser)
    res.status(200)
    res.json(true)
  } catch (error) {
    res.json(false)
  }
}

export default handler
