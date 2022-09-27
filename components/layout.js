import Navbar from "./navbar/navbar";
import Footer from './footer';
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Navbar path={router.asPath}/>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
