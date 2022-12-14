import { Button, Container, Flex, Heading, Input } from '@chakra-ui/react'
import PasswordInput from '../components/inputs/passwordInput'

const onKeyDown = event => {
  let keyCode = event.keyCode

  // Checks if enter key is pressed
  if (keyCode === 13) {
    alert('Enter has been pressed')
  }
}

const Login = () => {
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
      <Container>
        <Flex
          flexDir="column"
          mt={{ base: '6em', sm: '10em', md: '12em', lg: '15em' }}
        >
          <Heading
            as="h4"
            color="white"
            textAlign="center"
            mb={4}
            data-testid="loginTitle"
          >
            Meta-Movie
          </Heading>
          <Input
            placeholder="Username"
            focusBorderColor="none"
            borderRadius={1}
            bgColor="white"
            data-testid="loginUsername"
            mb={3}
            onKeyUp={onKeyDown}
          />
          <PasswordInput />
          <Button colorScheme="blue" data-testid="loginSubmit">
            Login
          </Button>
        </Flex>
      </Container>
    </Container>
  )
}

export default Login
