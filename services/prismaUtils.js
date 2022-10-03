import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async(email, password) => {
  const user = await prisma.user.create({
    email: email,
    password: password
  }).then(async() => {
    await prisma.$disconnect()
  }).catch(async(err) => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
  });

  console.log(user)
}

export const updateUser = async(id, email, password, name) => {
  const user = await prisma.user.update({
    where: {
      id: id
    },
    email: email,
    password: password,
    name: name
  }).then(async() => {
    await prisma.$disconnect()
  }).catch(async(err) =>{
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
  })

  console.log(user)
}

