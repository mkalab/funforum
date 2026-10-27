import { Link } from 'react-router-dom'
import '../styles/contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="title">Contact</div>

      <div className="content">
        <p>Thank you for your interest in contacting 4chan!</p>

        <div className="long-content">
          Before proceeding, please ensure that your question hasn't already
          been answered on the <Link to="/faq">Frequently Asked Questions</Link>{' '}
          or <Link to="/faq">Feedback</Link> pages. Additional pages you might
          find useful include: <Link to="/faq">News</Link>,{' '}
          <Link to="/faq">Rules</Link>, <Link to="/faq">Advertise</Link>, and{' '}
          <Link to="/faq">Press</Link>.
        </div>

        <p>
          Due to the high volume of e-mail we receive, we may not be able to
          respond to your inquiry immediately.
        </p>

        <p className="note">
          NOTE: Unban requests are not accepted via e-mail. All unban requests
          will be ignored. Appeal your ban using the built-in form!
        </p>

        <hr className="divider" />

        via email
        <br />
        <ul className="contact-list">
          <li><a href="#">Advertising</a> Inquiries: <a href="#">advertise@4chan.org</a> [Or use our <a href="#">Self-Serve</a> option!]</li>
          <li>Business Development: <a href="#">bizdev@4chan.org</a></li>
          <li>DMCA Notice: See our <a href="#">DMCA Policy</a>.</li>
        </ul>
        <br />

        via contact form
        <br />
        <ul className="contact-list">
          <li>Ban Appeals: Use the <a href="#">Ban Appeal</a> form. Unban requests are not accepted via <a href="#">e-mail</a>.</li>
          <li>General Support &amp; Bug Reports: Use our <a href="#">Feedback page</a>.</li>
        </ul>

        via X (Twitter)
        <br />
        <ul className="contact-list">
          <li><a href="#">@nyaachan</a></li>
        </ul>
      </div>
    </div>
  )
}