import { Box, Image, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const MovieCard = props => {
  const router = useRouter()

  let link = `movies/${props.id}`
  function onClickHandler() {
    router.push(link)
  }

  return (
    <Box
      w={150}
      mb={5}
      textAlign={'center'}
      overflow={'hidden'}
      whiteSpace={'nowrap'}
      textOverflow={'ellipsis'}
      color={'white'}
    >
      <Image
        alt={`${props.movieName}'s movie poster`}
        borderRadius={10}
        h={225}
        src={props.imageUrl}
        _hover={{ cursor: 'pointer' }}
        onClick={onClickHandler}
      />
      <NextLink href={link}>
        <Link color={'white'} mt={1}>
          {props.movieName}
        </Link>
      </NextLink>
    </Box>
  )
}

export default MovieCard;
