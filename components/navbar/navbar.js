import { Box, Container, Heading, HStack } from '@chakra-ui/react'
import MobileNavButton from './mobile/mobileNavbar'
import React from 'react'

const Navbar = ({ children }) => {
  let mobileChildren = React.Children.map(children, el => {
    return React.cloneElement(el, { display: "mobile"})
  })
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
            {children}
          </HStack>
        </HStack>
        <HStack
          display={{ base: 'flex', md: 'none' }}
          flexDirection="row-reverse"
          justifyContent="space-between"
        >
          <MobileNavButton>
            {mobileChildren}
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
