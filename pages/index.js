import { Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavButton from '../components/navbar/navButton'
import NavLink from '../components/navbar/navLink'
import Navbar from '../components/navbar/navbar'

const onKeyDown = event => {
  let keyCode = event.keyCode

  // Enter key = 13
  if (keyCode === 13) {
    alert('Enter has been pressed')
  }
}

const onSearchClick = () => {
  alert('Search Clicked')
}

const Home = () => {
  const [user, setUser] = useState(null)
  const [isUserLoggedIn, setLoggedInUser] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let possibleUser = JSON.parse(sessionStorage.getItem('user'))

    if (possibleUser !== null) {
      setLoggedInUser(true)
      if (possibleUser.type === 1) {
        setIsAdmin(true)
      }
    }

    setUser(possibleUser)
    console.log(user)
  }, [isUserLoggedIn])

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
        { (isUserLoggedIn && isAdmin) &&
          <Navbar>
            <NavLink href="/admin" path={router.asPath}>
              <Text>Admin panel</Text>
            </NavLink>
            <NavLink href="/movies" path={router.asPath}>
              <Text>Movies</Text>
            </NavLink>
            <NavLink href={"/profile/" + user.id} path={router.asPath}>
              <Text>Profile</Text>
            </NavLink>
            <NavButton path={router.asPath} />
          </Navbar>
        }
        { (isUserLoggedIn && !isAdmin) &&
          <Navbar>
            <NavLink href="/movies" path={router.asPath}>
              <Text>Movies</Text>
            </NavLink>
            <NavLink href={"/profile/" + user.id} path={router.asPath}>
              <Text>Profile</Text>
            </NavLink>
            <NavButton path={router.asPath} />
          </Navbar>
        }
        { !isUserLoggedIn &&
          <Navbar>
            <NavLink href="/" path={router.asPath}>
              <Text>Home</Text>
            </NavLink>
            <NavLink href="/login" path={router.asPath}>
              <Text>Login</Text>
            </NavLink>
            <NavLink href="/register" path={router.asPath}>
              <Text>Sign Up</Text>
            </NavLink>
          </Navbar>
        }
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Flex
          flexDir="column"
          mt={{ base: '6em', sm: '10em', md: '12em', lg: '15em' }}
        >
          <Heading as="h4" color="white" textAlign="center" mb={4}>
            Movies Anywhere Everywhere
          </Heading>
          <Container display="flex" flexDir="row">
            <Input
              placeholder="Search for a movie"
              focusBorderColor="none"
              borderRightRadius={0}
              bgColor="white"
              data-testid="movieInput"
              onKeyUp={onKeyDown}
            />
            <Button
              colorScheme="blue"
              borderLeftRadius={0}
              onClick={onSearchClick}
              data-testid="inputSearchButton"
            >
              Search
            </Button>
          </Container>
        </Flex>
      </Container>
    </Container>
  )
}

export default Home
