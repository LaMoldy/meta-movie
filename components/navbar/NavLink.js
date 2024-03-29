import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const NavLink = ({ href, path, display, children }) => {
  const isCurrentPage = href === path // Checks to see if the url is the same as the path

  if (display === 'mobile') {
    return (
      <NextLink href={href}>
        <Link color={isCurrentPage ? 'grey' : 'black'} pt={2} >
          {children}
        </Link>
      </NextLink>
    )
  }
  return (
    <NextLink href={href}>
      <Link color={isCurrentPage ? 'grey' : 'white'} pr={2}>
        {children}
      </Link>
    </NextLink>
  )
}

export default NavLink
