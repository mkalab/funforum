import { Outlet } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <div className="page">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}