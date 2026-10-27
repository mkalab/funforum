import { Link } from 'react-router-dom'
import '../styles/faq.css'

export default function Faq() {
  return (
    <>
      <header className="faq-header">
        <h3 className="faq-title">Frequently Asked Questions</h3>
        <p className="faq-welcome">
          Welcome to 4chan's Frequently Asked Questions page. After reading the
          FAQ, be sure to familiarize yourself with the Rules!
        </p>
      </header>

      <div className="faq-body">
        <aside className="sidebar">
          <div className="question-title">Questions</div>
          <div className="question-content">
            <ul className="question-list">
              <li className="item-lv1"><a href="#" className="bold-link">Basics</a></li>
              <li className="item-lv2"><a href="#">What is 4chan?</a></li>
              <li className="item-lv3"><a href="#">How do I access the boards?</a></li>
              <li className="item-lv2"><a href="#">What should I know before I post?</a></li>
            </ul>
          </div>
        </aside>

        <main className="main-content">
          <div className="answer-title">Basics</div>
          <div className="answer-content">
            <h3>What is 4chan?</h3>
            <p>
              4chan is a simple image-based bulletin board where anyone can post
              comments and share images. ... (dán tiếp đoạn văn gốc)
            </p>

            <hr className="content-divider" />

            <h3>How do I access the boards?</h3>
            <p>In order to access the full site, you must first read and agree to the terms of the disclaimer...</p>
          </div>
        </main>
      </div>
    </>
  )
}