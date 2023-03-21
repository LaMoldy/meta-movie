import { Button, Container, Flex, Heading, Input, Select, Text } from "@chakra-ui/react"
import Navbar from "../../components/navbar/navbar";
import NavLink from "../../components/navbar/navLink";
import NavButton from "../../components/navbar/navButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Movie = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    let loggedInUser = JSON.parse(sessionStorage.getItem("user"))
    setUser(loggedInUser)
  })

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
        <Heading color={"white"} textAlign={"center"}>Add Movie</Heading>
        <Input backgroundColor={"white"} m={5} placeholder="Name" />
        <Input backgroundColor={"white"} mb={5} placeholder="Director" />
        <Input backgroundColor={"white"} mb={5} placeholder="Poster URL" />
        <Select placeholder="Genre" backgroundColor={"white"} mb={5}>
          <option value="Horror">Horror</option>
        </Select>
        <Button colorScheme={"blue"}>Add</Button>
      </Flex>
    </Container>
  )
}

export default Movie;
