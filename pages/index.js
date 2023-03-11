import { Button, Container, Flex, Heading, Input } from '@chakra-ui/react'
import Head from 'next/head'

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
