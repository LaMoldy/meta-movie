import { Box, Container, HStack, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import MobileNavButton from './mobile/mobileNavbar'

const NavLink = ({ href, path, children }) => {
  const isCurrentPage = path === href

  return (
    <NextLink href={href}>
      <Link color={isCurrentPage ? 'grey' : 'white'} pr={2}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  return (
    <Container maxW="100%" m={0} p={0}>
      <Box bg="#313030" w="100%" p={3}>
        <HStack display={{ base: 'none', md: 'flex' }}>
          <NavLink href="/" path={props.path}>
            <Text>Home</Text>
          </NavLink>
          <NavLink href="/login" path={props.path}>
            <Text>Login</Text>
          </NavLink>
        </HStack>
        <MobileNavButton display={{ base: 'flex', md: 'none' }}>
          <NavLink href="/" path={props.path}>
            <Text>Home</Text>
          </NavLink>
          <NavLink href="/login" path={props.path}>
            <Text>Login</Text>
          </NavLink>
        </MobileNavButton>
      </Box>
    </Container>
  )
}

export default Navbar
