import { Button, Container, Flex, Heading, Input, Select, Text } from "@chakra-ui/react"
import Navbar from "../../components/navbar/navbar";
import NavLink from "../../components/navbar/navLink";
import NavButton from "../../components/navbar/navButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllGenres } from "../../services/database";

const Movie = () => {
  const [user, setUser] = useState(null)
  const [genres, setGenres] = useState([])
  const router = useRouter()

  useEffect(() => {
    let loggedInUser = JSON.parse(sessionStorage.getItem("user"))
    setUser(loggedInUser)

    async function fetchGenres() {
      let genres = await getAllGenres()
      setGenres(genres)
    }

    fetchGenres()
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
        <Heading color={"white"} textAlign={"center"}>Add Movie</Heading>
        <Input backgroundColor={"white"} m={5} placeholder="Name" />
        <Input backgroundColor={"white"} mb={5} placeholder="Director" />
        <Input backgroundColor={"white"} mb={5} placeholder="Poster URL" />
        <Select backgroundColor={"white"} mb={5}>
          {
            genres.map(genre => (
              <option value={genre.id} key={genre.id}>{genre.name}</option>
            ))
          }
        </Select>
        <Button colorScheme={"blue"}>Add</Button>
      </Flex>
    </Container>
  )
}

export default Movie;
