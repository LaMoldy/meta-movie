import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const NavLink = ({ href, path, children }) => {
  const isCurrentPage = href === path; // Checks to see if the url is the same as the path

  return (
    <NextLink href={href}>
      <Link color={isCurrentPage ? 'grey' : 'white'} pr={2}>
        {children}
      </Link>
    </NextLink>
  );
}

export default NavLink;
