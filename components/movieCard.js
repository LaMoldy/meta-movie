import { Box, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link"

const MovieCard = (props) => {
  const router = useRouter()

  let link = `movies/${props.id}`
  function onClickHandler() {
    router.push(link)
  }

  return (
    <Box w={150} textAlign={"center"}>
      <Image borderRadius={10} src={props.imageUrl} _hover={{ cursor: "pointer" }} onClick={onClickHandler} />
      <NextLink href={link}>
        <Link color={"white"} mt={1}>{props.movieName}</Link>
      </NextLink>
    </Box >
  )
}

export default MovieCard;
