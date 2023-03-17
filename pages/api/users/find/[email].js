import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req, res) {
  const { email } = req.query

  const users = await prisma.user.findUnique({
    where: {
      email: email
    }
  }).then(user => console.log('selected:', user))
  res.json(users)
}

export default handler
