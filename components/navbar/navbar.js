import { Box, Container, Heading, HStack, Text } from '@chakra-ui/react'
import MobileNavButton from './mobile/mobileNavbar'
import NavLink from './navLink'

const Navbar = props => {
  return (
    <Container maxW="100%" m={0} p={0}>
      <Box bg="#1e1e1e" w="100%" p={3} boxShadow="dark-lg">
        <HStack display={{ base: 'none', md: 'flex' }} justify="space-between">
          <Heading
            as="h1"
            size="md"
            color="white"
            fontWeight="normal"
            data-testid="title"
          >
            Meta-Movie
          </Heading>
          <HStack data-testid="nav">
            <NavLink href="/" path={props.path}>
              <Text>Home</Text>
            </NavLink>
            <NavLink href="/login" path={props.path}>
              <Text>Login</Text>
            </NavLink>
            <NavLink href="/registration" path={props.path}>
              <Text>Sign Up</Text>
            </NavLink>
          </HStack>
        </HStack>
        <HStack
          display={{ base: 'flex', md: 'none' }}
          flexDirection="row-reverse"
          justifyContent="space-between"
        >
          <MobileNavButton>
            <NavLink href="/" path={props.path} display="mobile">
              <Text>Home</Text>
            </NavLink>
            <NavLink href="/login" path={props.path} display="mobile">
              <Text>Login</Text>
            </NavLink>
            <NavLink href="/registration" path={props.path} display="mobile">
              <Text>Sign Up</Text>
            </NavLink>
          </MobileNavButton>
          <Heading as="h1" color="white" size="md">
            Meta-Movie
          </Heading>
        </HStack>
      </Box>
    </Container>
  )
}

export default Navbar
