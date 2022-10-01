import { useRouter } from 'next/router'
import Footer from './footer'
import Navbar from './navbar/navbar'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Navbar path={router.asPath} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
