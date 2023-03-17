import { Button } from "@chakra-ui/react"
import { useRouter } from "next/router"

const NavButton = ({ display }) => {
  const router = useRouter() 

  function onClickHandler() {
    sessionStorage.removeItem('user')
    router.push('/')
    router.reload()
  }

  if (display === "mobile") {
    return (
      <Button
        as='a'
        fontWeight={'normal'}
        color={'black'}
        background={'none'}
        _hover={{textDecoration: 'underline', cursor: 'pointer'}}
        _active={{background: 'none'}}
        onClick={onClickHandler}
      >
        Sign out
      </Button>
    )
  }

  return (
    <Button
      as='a'
      fontWeight={'normal'}
      color={'white'}
      background={'none'}
      _hover={{textDecoration: 'underline', cursor: 'pointer'}}
      _active={{background: 'none'}}
      onClick={onClickHandler}
    >
      Sign out
    </Button>
  )
}

export default NavButton
