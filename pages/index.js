import Navbar from "../components/navbar/navbar"
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar path={router.asPath} />
      <Text fontSize="2xl">Hello</Text>
    </div>
  );
}

export default Home;
