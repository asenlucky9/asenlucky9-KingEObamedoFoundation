import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
