import { PrismaClient } from '@prisma/client'
import { hashPassword } from './passwords.js'

const prisma = new PrismaClient()

async function main() {
  let password = await hashPassword('admin')

  await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      email: 'admin@admin.com',
      password: password,
      name: 'Admin',
      type: 1
    }
  })

  await prisma.movie.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Children of the Corn",
      director: "David Price",
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.qvycK7fI-bEcAbXD3j6KqwHaLH",
      genreId: 7
    }
  })

  const genres = [
    "action", "adventure", "animation",
    "comedy", "drama", "historical",
    "horror", "science fiction"
  ]

  for (let i = 0; i < genres.length; i++) {
    let index = i + 1
    await prisma.genre.upsert({
      where: { id: index },
      update: {},
      create: {
        id: index,
        name: genres[i]
      }
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async err => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
  })
