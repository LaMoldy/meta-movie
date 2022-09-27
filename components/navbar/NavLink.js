import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const NavLink = ({ href, path, display, children }) => {
  const isCurrentPage = href === path; // Checks to see if the url is the same as the path
  const linkColour = display === 'mobile' ? 'black' : 'white';

  return (
    <NextLink href={href}>
      <Link color={isCurrentPage ? 'grey' : linkColour} mt={7}>
        {children}
      </Link>
    </NextLink>
  );
}

export default NavLink;
