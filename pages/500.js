import { Container, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'

const ServerProblemPage = () => {
  return (
    <Flex alignContent="center" justifyContent="center" flexDir="column">
      <Head>
        <title>500 - Server Error</title>
      </Head>
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        gap={2}
        height="70vh"
      >
        <Image
          src="/sad_face.png"
          width="100px"
          height="100px"
          alt="500 Image"
        />
        <Divider orientation="horizontal" data-testid="divider" />
        <Heading as="h1" data-testid="500">
          500
        </Heading>
        <Text data-testid="server-text">Looks like there was an error!</Text>
      </Container>
    </Flex>
  )
}

export default ServerProblemPage
