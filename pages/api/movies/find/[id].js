import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req, res) {
  const { id } = req.query

  const movie = await prisma.movie.findUnique({
    where: {
      id: Number.parseInt(id)
    }
  })
  console.log('selected:', movie)
  res.json(movie)
}

export default handler
