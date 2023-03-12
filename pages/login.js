import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CircularProgress,
  Container,
  Flex,
  Heading,
  Input
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import PasswordInput from '../components/inputs/passwordInput'
import { getUser } from '../services/database'
import { isEmailAndPasswordValid, isEmailValid } from '../services/validation'

async function verifyUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      let user = await getUser(email)

      if (user === null) {
        reject()
      } else if (email == user.email && password == user.password) {
        resolve()
      } else {
        reject()
      }
    }, 3000)
  })
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onKeyUpHandler = async event => {
    // Gets the keycode
    let keyCode = event.keyCode

    // Checks if enter key is pressed
    if (keyCode === 13) {
      submitForm()
    } else {
      let value = event.target.value
      event.target.id === 'email' ? setEmail(value) : setPassword(value)
    }
  }

  const submitForm = async () => {
    let isValid = isEmailAndPasswordValid(email, password)
    if (isValid !== '') {
      setError(true)
      setErrorMessage(isValid)
    } else if (!isEmailValid(email)) {
      console.log(!isEmailValid(email), email)
      let errorMessage = 'Email is not valid'
      setError(true)
      setErrorMessage(errorMessage)
    } else {
      setError(false)
      setIsLoading(true)
      try {
        await verifyUser(email, password)
        setIsLoading(false)
        router.push('/movies')
      } catch (errorMsg) {
        setError(true)
        setErrorMessage('Invalid email or password')
        setIsLoading(false)
        setEmail('')
        setPassword('')
      }
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
      <Head>
        <title>Login</title>
      </Head>
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
            Login
          </Heading>

          {error && ( // Checks if error is true
            <Alert status="error" mb={3}>
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
          <Input
            placeholder="Email"
            focusBorderColor="none"
            borderRadius={1}
            bgColor="white"
            data-testid="loginUsername"
            mb={3}
            onKeyUp={onKeyUpHandler}
            id="email"
          />
          <PasswordInput onKeyUpHandler={onKeyUpHandler} />
          <Button
            colorScheme="blue"
            data-testid="loginSubmit"
            onClick={submitForm}
          >
            {isLoading ? (
              <CircularProgress isIndeterminate size="24px" color="blue" />
            ) : (
              'Submit'
            )}
          </Button>
        </Flex>
      </Container>
    </Container>
  )
}

export default Login
