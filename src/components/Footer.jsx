import { instagram, instagramHandle } from '../data';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-icon">☾</span>
          <span>Moon's Candles <span className="footer-sub">24.7</span></span>
        </div>
        <a href={instagram} target="_blank" rel="noreferrer" className="footer-ig">
          {instagramHandle}
        </a>
        <p className="footer-copy">
          © {new Date().getFullYear()} Moon's Candles 24.7 · Hand-poured with care
        </p>
      </div>
    </footer>
  );
}
