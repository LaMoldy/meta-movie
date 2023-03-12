import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Container, Flex, Heading, Input } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import PasswordInput from '../components/inputs/passwordInput';

async function getUser(email) {
  const res = await fetch(`api/users/${email}`)
  const data = await res.json()
  return data
}

async function verifyUser(email, password) {
  let user = await getUser(email)

  if (user === null) {
    return false
  } else if (email == user.email && password == user.password) {
    return false
  }

  return true
}

export function isValidInputs(email, password) {
  if (email === '' || email === null || email === undefined) {
    return 'Email cannot be empty'
  }

  if (password === '' || password === null || password === undefined) {
    return 'Password cannot be empty'
  }

  return ''
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState(false)

  const onKeyUpHandler = async event => {
    // Gets the keycode
    let keyCode = event.keyCode

    // Checks if enter key is pressed
    if (keyCode === 13) {
      let isValid = isValidInputs(email, password)
      if (isValid !== '') {
        setError(true)
        setErrorMessage(isValid)
      } else {
        let userLogin = await verifyUser(email, password)
        if (!userLogin) {
          setError(true)
          setErrorMessage('Email or password is invalid.')
        }
      }
    } else {
      let value = event.target.value
      event.target.id === 'email' ? setEmail(value) : setPassword(value)
    }
  }

  const onClickHandler = async () => {
    let isValid = isValidInputs(email, password)
    if (isValid !== '') {
      setError(true)
      setErrorMessage(isValid)
    } else {
      let userLogin = await verifyUser(email, password)
      if (!userLogin) {
        setError(true)
        setErrorMessage('Email or password is invalid.')
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
            onClick={onClickHandler}
            data-testid="loginSubmit"
          >
            Submit
          </Button>
        </Flex>
      </Container>
    </Container>
  )
}

export default Login
