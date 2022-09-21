import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, IconButton, useDisclosure, VStack } from '@chakra-ui/react'
import { useRef } from 'react'
import SidePanel from './sidePanel'

const MobileNavButton = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonRef = useRef()

  return (
    <Flex>
      <IconButton ref={buttonRef} onClick={onOpen} icon={<HamburgerIcon />} />
      <SidePanel isOpen={isOpen} onClose={onClose} finalFocusRef={buttonRef}>
        <VStack alignItems="left">{children}</VStack>
      </SidePanel>
    </Flex>
  )
}

export default MobileNavButton
