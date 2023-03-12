import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req, res) {
  const body = req.body

  let newUser = {
    data: {
      name: '',
      email: body.email,
      password: body.password
    }
  }

  await prisma.user.create(newUser)

  res.redirect(307, '/login')
}

export default handler
