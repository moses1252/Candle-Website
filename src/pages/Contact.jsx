import { instagram, instagramHandle } from '../data';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <div className="container contact-inner">
        <span className="contact-moon">☾</span>
        <p className="eyebrow">✦ GET IN TOUCH ✦</p>
        <h1 className="section-title">Place your order</h1>
        <p className="contact-sub">
          We take all orders through Instagram. Send us a DM with the scents
          you'd like and whether you want candles or wax melts — we'll confirm
          your pre-order from there.
        </p>

        <a href={instagram} target="_blank" rel="noreferrer" className="btn contact-btn">
          Message us on Instagram
        </a>

        <div className="contact-details">
          <div className="contact-row">
            <span className="contact-label">Instagram</span>
            <a href={instagram} target="_blank" rel="noreferrer">{instagramHandle}</a>
          </div>
          <div className="contact-row">
            <span className="contact-label">Candles</span>
            <span>7 oz · $12 each</span>
          </div>
          <div className="contact-row">
            <span className="contact-label">Wax melts</span>
            <span>$8 each</span>
          </div>
        </div>
      </div>
    </div>
  );
}
