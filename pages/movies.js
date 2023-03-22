import { Container, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Navbar from "../components/navbar/navbar"
import NavButton from "../components/navbar/navButton"
import NavLink from "../components/navbar/navLink"
import { getAllMovies } from "../services/database"
import MovieCard from "../components/movieCard"

const Movies = () => {
  const [user, setUser] = useState(null)
  const [movies, setMovies] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)

  let router = useRouter()

  useEffect(() => {
    let foundUser = JSON.parse(sessionStorage.getItem('user'))

    if (foundUser.type === 1) {
      setIsAdmin(true)
    }

    setUser(foundUser)

    async function fetchMovies() {
      let moviesList = await getAllMovies()
      setMovies(moviesList)
    }

    fetchMovies()
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
      {isAdmin &&
        <Navbar>
          <NavLink href="/" path={router.asPath}>
            <Text>Home</Text>
          </NavLink>
          <NavLink href="/admin" path={router.asPath}>
            <Text>Admin panel</Text>
          </NavLink>
          <NavLink href={"/profile/" + user?.id} path={router.asPath}>
            <Text>Profile</Text>
          </NavLink>
          <NavButton path={router.asPath} />
        </Navbar>
      }
      {!isAdmin &&
        <Navbar>
          <NavLink href={'/'} path={router.asPath}>
            <Text>Home</Text>
          </NavLink>
          <NavLink href={"/profile/" + user?.id} path={router.asPath}>
            <Text>Profile</Text>
          </NavLink>
          <NavButton path={router.asPath} />
        </Navbar>
      }
      {
        movies.map(movie => (
          <MovieCard imageUrl={movie.imageUrl} movieName={movie.name} id={movie.id}></MovieCard>
        ))
      }
    </Container>
  )
}

export default Movies 
