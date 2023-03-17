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
  Input,
  Text
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import PasswordInput from '../components/inputs/passwordInput'
import { createUser } from '../services/database'
import { isEmailTaken, validateEmailPasswordForm } from '../services/validation'
import Navbar from '../components/navbar/navbar'
import NavLink from '../components/navbar/navLink'

const Register = () => {
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onKeyUpHandler = async e => {
    // Gets the keycode
    let keyCode = e.keyCode

    console.log(keyCode)

    // Checks if enter key is pressed
    if (keyCode === 13) {
      submitForm(e)
    }
  }

  const submitForm = async () => {
    let message = validateEmailPasswordForm(email, password)
    if (message !== '') {
      setError(true)
      setErrorMessage(message)
    } else {
      setIsLoading(true)
      try {
        await isEmailTaken(email)
        console.log('Email:', email, 'Password:', password)
        let response = await createUser(email, password)
        console.log(response)
        if (createUser(email, password) !== false) {
          router.push('/login')
        }
      } catch (errorMessage) {
        setError(true)
        setErrorMessage('Email has already been taken')
        setIsLoading(false)
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
      <Navbar path={router.asPath}>
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
      <Head>
        <title>Register</title>
      </Head>
      <Container>
        <Flex flexDir="column" mt={'10vmax'}>
          <Heading
            as="h4"
            color="white"
            textAlign="center"
            mb={4}
            data-testid="loginTitle"
          >
            Register
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
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <PasswordInput
            inputName="password"
            inputEvent={e => setPassword(e.target.value)}
            inputOnKeyUp={onKeyUpHandler}
            inputValue={password}
          />
          <Button
            colorScheme="blue"
            width={'100%'}
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

export default Register
