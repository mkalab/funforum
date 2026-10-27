import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer>
        <span className="footer-logo">ニャー</span>
        <div className="footer-links">
          <Link to="/">トップページ</Link>
          <a href="#">会社概要</a>
          <a href="#">フィードバック</a>
          <a href="#">法的条項</a>
          <Link to="/contact">お問い合わせ</Link>
          <Link to="/faq">FAQ</Link>
          <a href="#">ルール</a>
        </div>
      </footer>
      <small style={{ display: 'block', textAlign: 'center' }}>
        COPYRIGHT (C) 2001-2006 PAPERBOY&amp;CO. ALL RIGHTS RESERVED.
      </small>
    </>
  )
}