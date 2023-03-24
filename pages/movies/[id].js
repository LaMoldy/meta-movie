import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavButton from '../../components/navbar/navButton'
import NavLink from '../../components/navbar/navLink'
import Navbar from '../../components/navbar/navbar'
import { getMovie } from '../../services/database'

const MovieDetails = () => {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [movie, setMovie] = useState(null)
  const router = useRouter()

  const movieId = router.query

  useEffect(() => {
    let foundUser = JSON.parse(sessionStorage.getItem('user'))
    setUser(foundUser)

    if (foundUser.type === 1) {
      setIsAdmin(true)
    }

    async function getMovieData() {
      if (router.isReady) {
        const foundMovie = await getMovie(movieId.id)
        console.log('movie', foundMovie)
        setMovie(foundMovie)
      }
    }
    getMovieData()
  }, [movieId.id, router.isReady])

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
          <NavLink href={'/movies'} path={router.asPath}>
            <Text>Movies</Text>
          </NavLink>
          <NavLink href={'/profile/' + user?.id} path={router.asPath}>
            <Text>Profile</Text>
          </NavLink>
          <NavLink href="/admin" path={router.asPath}>
            <Text>Admin panel</Text>
          </NavLink>
          <NavButton path={router.asPath} />
        </Navbar>
      )}
      {!isAdmin && (
        <Navbar>
          <NavLink href={'/'} path={router.asPath}>
            <Text>Home</Text>
          </NavLink>
          <NavLink href={'/movies'} path={router.asPath}>
            <Text>Movies</Text>
          </NavLink>
          <NavLink href={'/profile/' + user?.id} path={router.asPath}>
            <Text>Profile</Text>
          </NavLink>
          <NavButton path={router.asPath} />
        </Navbar>
      )}
      <Heading color={'white'} textAlign={'center'} mt={20}>
        {movie?.name}
      </Heading>
      <Flex
        flexDirection={'row'}
        w={'60%'}
        m={'auto'}
        flexWrap={'wrap'}
        alignItems={'center'}
      >
        <Box as="div">
          <Image
            src={movie?.imageUrl}
            alt={'movie poster'}
            w={225}
            mt={20}
            borderRadius={10}
          />
          <Text color={'white'} textAlign={'center'}>
            Director: {movie?.director}
          </Text>
          <Text color={'white'} textAlign={'center'}>
            Rated: {movie?.rating}
          </Text>
        </Box>
        <Box as="div" w={'40%'} ml={'120px'}>
          <Text color={'white'}>{movie?.description}</Text>
        </Box>
      </Flex>
    </Container>
  )
}

export default MovieDetails
