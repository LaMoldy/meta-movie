import { Button, Container, Flex, Input } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Container>
        <Flex flexDir="row">
          <Input
            placeholder="Search for a movie"
            mt={{ base: '6em', sm: '10em', md: '12em', lg: '15em' }}
            focusBorderColor="none"
            borderRightRadius={0}
            data-testid="movieInput"
          />
          <Button
            colorScheme="blue"
            mt={{ base: '6em', sm: '10em', md: '12em', lg: '15em' }}
            borderLeftRadius={0}
            data-testid="inputSearchButton"
          >
            Search
          </Button>
        </Flex>
      </Container>
    </div>
  )
}

export default Home
