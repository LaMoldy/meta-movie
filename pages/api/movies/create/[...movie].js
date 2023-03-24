import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req, res) {
  const { movie } = req.query

  try {
    let newMovie = await prisma.movie.create({
      data: {
        name: movie[0],
        director: movie[1],
        description: movie[2],
        imageUrl: movie[3],
        rating: Number.parseInt(movie[4]),
        genreId: Number.parseInt(movie[5])
      }
    })

    console.log('created:', newMovie)
    res.json(true)
    res.status(200)
  } catch (error) {
    console.log(movie)
    console.error(error)
    res.json(false)
  }
}

export default handler
