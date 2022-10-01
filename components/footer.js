import { Box, Container, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container
      pos="fixed"
      bottom={0}
      p={0}
      m={0}
      maxW="100%"
      data-testid="footer"
    >
      <Box width="100%" backgroundColor="#313030">
        <Text textAlign="center" p={2} color="#ffffff">
          Nikk Jackson
        </Text>
      </Box>
    </Container>
  )
}

export default Footer
