import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Container, Flex, Heading, Input } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import PasswordInput from '../components/inputs/passwordInput';

async function getUser(email) {
  console.log(email)
  const res = await fetch(`api/users/${email}`)
  const data = await res.json()
  return data
}

async function verifyUser(email, password) {
  let user = await getUser(email)
  console.log('users', user)

  if (user === null) {
    return false
  } else if (email == user.email && password == user.password) {
    return false
  }

  return true
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
      if (email === '') {
        setError(true)
        setErrorMessage('Email cannot be empty.')
      } else if (password === '') {
        setError(true)
        setErrorMessage('Password cannot be empty')
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
    if (email === '') {
      setError(true)
      setErrorMessage('Email cannot be empty.')
    } else if (password === '') {
      setError(true)
      setErrorMessage('Password cannot be empty')
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
          <PasswordInput onChangeHandler={onKeyUpHandler} />
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
