import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handle(req, res) {
  const users = await prisma.user.findMany()
  res.json(users)
}

export default handle
