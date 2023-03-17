import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req, res) {
  const { user } = req.query


  let profileUrl = ""

  for (let i = 2; i < user.length; i++) {
    profileUrl += user[i]
  }

  let updateUser = {
    id: user[0],
    name: user[1],
    profileUrl: profileUrl
  }

  console.log(updateUser)

  try {
    await prisma.user.update({
      where: {
        id: Number.parseInt(updateUser.id)
      },
      data: {
        name: updateUser.name,
        profileUrl: updateUser.profileUrl
      }
    }).then(user => {
      console.log('updated:', user)
      updateUser = user;
    })

    res.status(200)
    res.json({user: updateUser})
  } catch (error) {
    res.json({
      message: "failed to update",
      errorMsg: error.message
    })
  }
}

export default handler