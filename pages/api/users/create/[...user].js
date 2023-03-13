import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req, res) {
  const { user } = req.query

  let newUser = {
    data: {
      name: '',
      email: user[0],
      password: user[1]
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
