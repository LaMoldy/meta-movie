import { Container, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Navbar from "../components/navbar/navbar"
import NavButton from "../components/navbar/navButton"
import NavLink from "../components/navbar/navLink"

const Movies = () => {
  const [isAdmin, setIsAdmin] = useState()

  let router = useRouter()

  useEffect(() => {
    console.log('run')
    let foundUser = JSON.parse(sessionStorage.getItem('user'))
    
    if (foundUser.type === 1) {
      setIsAdmin(true)
    }
  }, [isAdmin])

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
          <NavLink href="/admin" path={router.asPath}>
            <Text>Admin panel</Text>
          </NavLink>
          <NavLink href="/" path={router.asPath}>
            <Text>Home</Text>
          </NavLink>
          <NavButton path={router.asPath} />
        </Navbar>
      }
      { !isAdmin &&
        <Navbar>
          <NavLink href={'/'} path={router.asPath}>
            <Text>Home</Text>
          </NavLink>
          <NavButton path={router.asPath} />
        </Navbar>
      }
      <Text color={'white'}>Working</Text>
    </Container>
  )
}

export default Movies 
