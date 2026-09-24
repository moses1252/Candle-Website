import { Link } from "react-router-dom";
import {
  products,
  candlePrice,
  waxMeltPrice,
  instagram,
  instagramHandle,
} from "../data";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">✦ HAND-POURED SOY CANDLES ✦</p>
          <h1 className="hero-title">
            Always a light
            <br />
            to guide us
          </h1>
          <p className="hero-sub">
            Clean-burning candles and wax melts, poured in small batches under
            the same moon we all share.
          </p>
          <Link to="/shop" className="btn">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="featured">
        <div className="container">
          <h2 className="section-title">Featured scents</h2>
          <p className="featured-pricing">
            7 oz candles ${candlePrice} · wax melts ${waxMeltPrice}
          </p>
          <div className="featured-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="featured-cta">
            <Link to="/shop" className="btn btn-outline">
              VIEW ALL SCENTS
            </Link>
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="story">
        <div className="container story-inner">
          <span className="story-moon">☾</span>
          <p className="story-quote">
            "The moon has always held a special place in my heart. We all look
            up at the same moon and shine beneath the same sky."
          </p>
          <p className="story-attr">— YAYA, FOUNDER</p>
          <Link to="/about" className="story-link">
            Read our story →
          </Link>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="ig-cta">
        <div className="container">
          <h2 className="section-title">Order on Instagram</h2>
          <p className="ig-text">
            DM us to place your pre-order and choose your favorite scent.
          </p>
          <a href={instagram} target="_blank" rel="noreferrer" className="btn">
            {instagramHandle}
          </a>
        </div>
      </section>
    </div>
  );
}
