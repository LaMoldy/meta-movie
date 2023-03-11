import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handle(req, res) {
  const { email } = req.query
  const users = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  res.json(users)
}

export default handle
