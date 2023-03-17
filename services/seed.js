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
