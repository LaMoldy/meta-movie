import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import NavButton from "../components/navbar/navButton"
import NavLink from "../components/navbar/navLink"
import Navbar from "../components/navbar/navbar"

const Admin = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    let loggedInUser = JSON.parse(sessionStorage.getItem("user"))
    setUser(loggedInUser)
  }, [])

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
      <Navbar>
        <NavLink href="/" path={router.asPath}>
          <Text>Home</Text>
        </NavLink>
        <NavLink href={"/profile/" + user?.id} path={router.asPath}>
          <Text>Profile</Text>
        </NavLink>
        <NavLink href={"/movies"} path={router.asPath}>
          <Text>Movies</Text>
        </NavLink>
        <NavButton path={router.asPath}></NavButton>
      </Navbar>
      <Flex flexDirection={"column"} w={80} justifyContent={"center"} alignItems={"center"} margin={"100px auto 0 auto"}>
        <Heading color={"white"} textAlign={"center"}>Admin Panel</Heading>
        <Button as="a" colorScheme={"blue"} w={"100%"} mt={10} href={"/add/movie"}>Add Movie</Button>
      </Flex>
    </Container>
  )
}

export default Admin

