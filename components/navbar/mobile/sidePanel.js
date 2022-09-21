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

const SidePanel = ({ isOpen, onClose, buttonRef, placement, children }) => {
  <Flex w={5}>
    <Drawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={buttonRef}
    >
      <DrawerOverlay />
      <DrawerContent alignItems="center">
        <DrawerCloseButton alignSelf="end" />
        <DrawerHeader>
          <Text>Pages</Text>
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  </Flex>
}

export default SidePanel
