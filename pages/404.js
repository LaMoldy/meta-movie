import { Container, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import Head from "next/head";
import Image from 'next/image';
import Navbar from '../components/navbar/navbar';
import NavLink from '../components/navbar/navLink';
import { useRouter } from 'next/router';

const UnknownPage = () => {
  const router = useRouter()
  return (
    <Flex alignContent="center" justifyContent="center" flexDir="column">
      <Navbar path={router.asPath}>
        <NavLink href="/" path={router.asPath}>
          <Text>Home</Text>
        </NavLink>
      </Navbar>
      <Head>
        <title>404 - Not Found</title>
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
          alt="404 Image"
        />
        <Divider orientation="horizontal" data-testid="divider" />
        <Heading as="h1" data-testid="404">
          404
        </Heading>
        <Text data-testid="lost-text">Looks like you got lost!</Text>
      </Container>
    </Flex>
  )
}

export default UnknownPage
