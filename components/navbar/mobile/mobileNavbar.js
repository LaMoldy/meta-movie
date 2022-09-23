import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, IconButton, useDisclosure, VStack } from '@chakra-ui/react'
import SidePanel from './sidePanel'

const MobileNavButton = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <IconButton 
        onClick={onOpen} 
        aria-label='navigation menu' 
        icon={
          <HamburgerIcon boxSize='1.25em' color='black' />
        } />
      <SidePanel isOpen={isOpen} onClose={onClose} placement='right'>
        <VStack alignItems='left'>{children}</VStack>
      </SidePanel>
    </Flex>
  )
}

export default MobileNavButton;
