import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req, res) {
  const genres = await prisma.genre.findMany()
  console.log('selected:', genres)
  res.json(genres)
}

export default handler
