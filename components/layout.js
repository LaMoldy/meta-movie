import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <main data-testid="main">{children}</main>
      <Footer data-testid="footer" />
    </>
  )
}

export default Layout
