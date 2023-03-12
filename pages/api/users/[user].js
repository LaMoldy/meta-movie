import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handle(req, res) {
  const { user } = req.query
  const newUser = {
    name: user.name,
    email: user.email,
    password: user.password
  }

  await prisma.user.create(newUser)

  res.status(200)
}
