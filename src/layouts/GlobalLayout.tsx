import { Footer, Header, MobileDrawer } from '../components'

interface GlobalLayoutProps {
  children: React.ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <MobileDrawer />
      <main>{children}</main>
      <Footer />
    </>
  )
}
