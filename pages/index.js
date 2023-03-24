import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MovieCard from '../components/movieCard'
import NavButton from '../components/navbar/navButton'
import NavLink from '../components/navbar/navLink'
import Navbar from '../components/navbar/navbar'
import { getAllMovies } from '../services/database'

const Home = () => {
  const [user, setUser] = useState(null)
  const [movies, setMovies] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [isUser, setIsUser] = useState(false)

  let router = useRouter()

  useEffect(() => {
    let foundUser = JSON.parse(sessionStorage.getItem('user'))

    if (foundUser) {
      if (foundUser.type === 1) {
        setIsAdmin(true)
      }

      setIsUser(true)
      setUser(foundUser)
    }

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
      {isAdmin && (
        <Navbar>
          <NavLink href="/" path={router.asPath}>
            <Text>Home</Text>
          </NavLink>
          <NavLink href="/admin" path={router.asPath}>
            <Text>Admin panel</Text>
          </NavLink>
          <NavLink href={'/profile/' + user?.id} path={router.asPath}>
            <Text>Profile</Text>
          </NavLink>
          <NavButton path={router.asPath} />
        </Navbar>
      )}
      {!isAdmin && isUser && (
        <Navbar>
          <NavLink href={'/'} path={router.asPath}>
            <Text>Home</Text>
          </NavLink>
          <NavLink href={'/profile/' + user?.id} path={router.asPath}>
            <Text>Profile</Text>
          </NavLink>
          <NavButton path={router.asPath} />
        </Navbar>
      )}
      {!isUser && !isAdmin && (
        <Navbar>
          <NavLink href={'/'} path={router.asPath}>
            <Text>Home</Text>
          </NavLink>
          <NavLink href={'/login'} path={router.asPath}>
            <Text>Login</Text>
          </NavLink>
          <NavLink href={'/register'} path={router.asPath}>
            <Text>Sign up</Text>
          </NavLink>
        </Navbar>
      )}
      <Heading color={'white'} textAlign={'center'} mt={20}>
        Movies
      </Heading>
      <Flex
        mt={10}
        ml={'auto'}
        mr={'auto'}
        w={'78%'}
        flexDirection={'row'}
        flexWrap={'wrap'}
        gap={9}
      >
        {movies.map(movie => (
          <MovieCard
            imageUrl={movie.imageUrl}
            movieName={movie.name}
            id={movie.id}
            key={movie.id}
          ></MovieCard>
        ))}
      </Flex>
    </Container>
  )
}

export default Home
