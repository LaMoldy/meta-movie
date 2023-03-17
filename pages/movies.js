import { Container, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Navbar from "../components/navbar/navbar"
import NavButton from "../components/navbar/navButton"

const Movies = () => {
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
        <NavButton />
      </Navbar>
      <Text color={'white'}>Working</Text>
    </Container>
  )
}

export default Movies 
