import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req, res) {
  let movies = await prisma.movie.findMany()
  return res.json(movies)
}

export default handler
