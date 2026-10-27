import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Account from './pages/Account'
// import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        {/*<Route path="*" element={<NotFound />} />*/}
      </Route>
    </Routes>
  )
}