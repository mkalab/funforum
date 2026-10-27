import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="topnav">
      <Link to="/">トップページ</Link>
      <a href="#">お知らせ</a>
      <Link to="/account">アカウント</Link>
      <a href="#">イベント</a>
      <Link to="/contact">サポート</Link>
    </nav>
  )
}