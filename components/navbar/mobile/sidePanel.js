import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text
} from '@chakra-ui/react'

const SidePanel = ({ isOpen, onClose, placement, children }) => {
  return (
    <Flex w={5}>
      <Drawer isOpen={isOpen} placement={placement} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" />
          <DrawerHeader>
            <Text>Pages</Text>
          </DrawerHeader>
          <DrawerBody textAlign="center">{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default SidePanel
