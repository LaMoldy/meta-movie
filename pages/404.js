import {Container, Divider, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";

const UnknownPage = () => {
  return (
      <Container
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        gap={2}
        margin='auto'
      >
        <Image
          src='/assets/sad_face.png'
          width='100px'
          height='100px'

        />
        <Divider orientation='horizontal' />
        <Heading as='h1'>404</Heading>
        <Text>Looks like you got lost!</Text>
      </Container>
  );
}

export default UnknownPage;