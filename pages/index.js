import Navbar from '../components/navbar/navbar';
import { Container, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar path={router.asPath} />
      <Container>
        <Input
          placeholder='Search for a movie' 
          mt={{ base: '6em', sm: '10em', md: '12em', lg: '15em' }}
          focusBorderColor='none'
          data-testid='movieInput'  
        />
      </Container>
    </div>
  );
}

export default Home;
