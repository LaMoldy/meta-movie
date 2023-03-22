import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req, res) {
  const { movie } = req.query

  try {
    let newMovie = await prisma.movie.create({
      data: {
        name: movie[0],
        director: movie[1],
        imageUrl: movie[2],
        genreId: movie[3]
      }
    })

    console.log('created:', newMovie)
    res.json(true)
    res.status(200)
  } catch (error) {
    res.json(false)
  }
}

export default handler
