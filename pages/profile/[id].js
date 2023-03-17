import { Box, Button, Container, Flex, Image, Input, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import NavButton from "../../components/navbar/navButton"
import NavLink from "../../components/navbar/navLink"
import Navbar from "../../components/navbar/navbar"
import { updateUser } from "../../services/database"

const Profile = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [userProfilePic, setProfilePic] = useState("")
  const [profileUrl, setProfileUrl] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState(0)

  let router = useRouter()

  useEffect(() => {
    let foundUser = JSON.parse(sessionStorage.getItem('user'))

    if (foundUser.type === 1) {
      setIsAdmin(true)
    }

    setEmail(foundUser.email)
    setProfilePic(foundUser.profileUrl)
    setProfileUrl(foundUser.profileUrl)
    setName(foundUser.name)
    setId(foundUser.id)
  }, [])

  async function applyChanges() {
    let data = await updateUser(id, name, encodeURIComponent(profileUrl))
    sessionStorage.setItem('user', JSON.stringify(data.user))
    router.reload()
  }

  return (
    <Container
      position="fixed"
      width="100%"
      height="100vh"
      maxW="100vw"
      maxH="100%"
      p={0}
      m={0}
      bgColor="#383736"
    >
      { isAdmin &&
        <Navbar>
          <NavLink href="/" path={router.asPath}>
            <Text>Home</Text>
          </NavLink>
          <NavLink href={'/movies'} path={router.asPath}>
            <Text>Movies</Text>
          </NavLink>
          <NavLink href="/admin" path={router.asPath}>
            <Text>Admin panel</Text>
          </NavLink>
          <NavButton path={router.asPath} />
        </Navbar>
      }
      { !isAdmin &&
        <Navbar>
          <NavLink href={'/'} path={router.asPath}>
            <Text>Home</Text>
          </NavLink>
          <NavLink href={'/movies'} path={router.asPath}>
            <Text>Movies</Text>
          </NavLink>
          <NavButton path={router.asPath} />
        </Navbar>
      }

      <Image src={userProfilePic} w={150} height={150} borderRadius={10} m={'75px auto 0 auto'} />
      <Flex flexDir="column" justifyContent={'center'} alignItems={'center'} gap={5} mt={'40px'}>
        <Box as='div'>
          <Text fontSize={'1.25em'} color={'white'}>
            Email:
          </Text>
          <Input backgroundColor={'white'} w={300} value={email} disabled />
        </Box>
        <Box as='div'>
          <Text fontSize={'1.25em'} color={'white'}>
            Profile Image:
          </Text>
          <Input backgroundColor={'white'} w={300} value={profileUrl} onChange={(e) => setProfileUrl(e.target.value)} />
        </Box>
        <Box as='div'>
          <Text fontSize={'1.25em'} color={'white'}>
            Name:
          </Text>
          <Input backgroundColor={'white'} w={300} value={name} onChange={(e) => setName(e.target.value)} />
        </Box>
        <Button colorScheme={'blue'} w={75} onClick={applyChanges}>
          Apply
        </Button>
      </Flex>
    </Container>
  )
}

export default Profile
