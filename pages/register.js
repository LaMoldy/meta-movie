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
import { useState } from 'react'
import PasswordInput from '../components/inputs/passwordInput'
import {
  isEmailAndPasswordValid,
  isEmailTaken,
  isEmailValid
} from '../services/validation'

const Register = () => {
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onKeyUpHandler = async e => {
    // Gets the keycode
    let keyCode = e.keyCode

    // Checks if enter key is pressed
    if (keyCode === 13) {
      submitForm(e)
    }
  }

  const submitForm = async e => {
    e.preventDefault()
    let isValid = isEmailAndPasswordValid(email, password)
    if (isValid !== '') {
      setError(true)
      setErrorMessage(isValid)
      e.preventDefault()
    } else {
      if (!isEmailValid(email)) {
        setError(true)
        setErrorMessage('Email is not valid')
        e.preventDefault()
      } else {
        setError(false)
        setIsLoading(true)
        try {
          await isEmailTaken(email)
          setIsLoading(false)
        } catch (errorMessage) {
          setError(true)
          setErrorMessage('Email has already been taken')
          setIsLoading(false)
          setEmail('')
          setPassword('')
          e.preventDefault()
        }
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
        <title>Register</title>
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
            Register
          </Heading>

          {error && ( // Checks if error is true
            <Alert status="error" mb={3}>
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
          <form
            method="POST"
            action={`/api/users/create`}
            onSubmit={submitForm}
          >
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
              inputValue={password}
            />
            <Button
              colorScheme="blue"
              width={'100%'}
              data-testid="loginSubmit"
              type="submit"
            >
              {isLoading ? (
                <CircularProgress isIndeterminate size="24px" color="blue" />
              ) : (
                'Submit'
              )}
            </Button>
          </form>
        </Flex>
      </Container>
    </Container>
  )
}

export default Register
