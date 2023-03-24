import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  Textarea
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavButton from '../../components/navbar/navButton'
import NavLink from '../../components/navbar/navLink'
import Navbar from '../../components/navbar/navbar'
import { createMovie, getAllGenres } from '../../services/database'

const Movie = () => {
  const [user, setUser] = useState(null)
  const [movieName, setMovieName] = useState('')
  const [director, setDirector] = useState('')
  const [imageUrl, setImageUrl] = useState(
    'https://tse2.mm.bing.net/th?id=OIP.BgFEz5zHKDI9fZhtrdhbLQHaHa'
  )
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')
  const [genreId, setGenreId] = useState(1)
  const [genresList, setGenresList] = useState([])
  const [isError, setIsError] = useState(false)
  const [isCreated, setIsCreated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let loggedInUser = JSON.parse(sessionStorage.getItem('user'))
    setUser(loggedInUser)

    async function fetchGenres() {
      let genres = await getAllGenres()
      setGenresList(genres)
    }

    fetchGenres()
  }, [])

  async function onClickHandler() {
    let result = await createMovie(
      movieName,
      encodeURIComponent(imageUrl),
      director,
      description,
      rating,
      genreId
    )
    if (result) {
      setIsCreated(true)
      setIsError(false)
    } else {
      setIsError(true)
      setIsCreated(false)
    }
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
      <Navbar>
        <NavLink href="/" path={router.asPath}>
          <Text>Home</Text>
        </NavLink>
        <NavLink href={'/profile/' + user?.id} path={router.asPath}>
          <Text>Profile</Text>
        </NavLink>
        <NavLink href={'/movies'} path={router.asPath}>
          <Text>Movies</Text>
        </NavLink>
        <NavButton path={router.asPath}></NavButton>
      </Navbar>
      <Flex
        flexDirection={'column'}
        w={80}
        justifyContent={'center'}
        alignItems={'center'}
        margin={'100px auto 0 auto'}
      >
        <Heading color={'white'} textAlign={'center'}>
          Add Movie
        </Heading>
        {isError && ( // Checks if error is true
          <Alert status="error" mt={5}>
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>Failed to create movie!</AlertDescription>
          </Alert>
        )}
        {isCreated && ( // Checks if error is true
          <Alert status="success" mt={5}>
            <AlertIcon />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Created a new movie</AlertDescription>
          </Alert>
        )}
        <Input
          backgroundColor={'white'}
          m={5}
          placeholder="Name"
          value={movieName}
          onChange={e => setMovieName(e.target.value)}
        />
        <Input
          backgroundColor={'white'}
          mb={5}
          placeholder="Director"
          value={director}
          onChange={e => setDirector(e.target.value)}
        />
        <Input
          backgroundColor={'white'}
          mb={5}
          placeholder="Poster URL"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />
        <Textarea
          backgroundColor={'white'}
          mb={5}
          placeholder="Description"
          value={description}
          resize={'none'}
          onChange={e => setDescription(e.target.value)}
        />
        <Input
          backgroundColor={'white'}
          mb={5}
          placeholder="Rating"
          value={rating}
          onChange={e => setRating(e.target.value)}
        />
        <Select
          backgroundColor={'white'}
          mb={5}
          value={genreId}
          onChange={e => setGenreId(e.target.value)}
        >
          {genresList.map(genre => (
            <option value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </Select>
        <Button colorScheme={'blue'} onClick={onClickHandler}>
          Add
        </Button>
      </Flex>
    </Container>
  )
}

export default Movie
