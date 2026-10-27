import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <h1 className="logo">
      <Link to="/" className="logo-text">ニャー</Link>
    </h1>
  )
}