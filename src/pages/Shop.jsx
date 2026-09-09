import { products, candlePrice, waxMeltPrice, instagram, instagramHandle } from '../data';
import ProductCard from '../components/ProductCard';
import './Shop.css';

export default function Shop() {
  return (
    <div className="shop">
      <div className="container">
        <header className="shop-header">
          <p className="eyebrow">✦ THE COLLECTION ✦</p>
          <h1 className="section-title">Shop our scents</h1>
          <p className="shop-sub">
            Every scent comes as a 7 oz candle (${candlePrice}) or a pack of
            wax melts (${waxMeltPrice}). Made to order in small batches.
          </p>
        </header>

        <div className="shop-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="shop-order">
          <p>Ready to order? Send us a message and we'll take it from there.</p>
          <a href={instagram} target="_blank" rel="noreferrer" className="btn">
            DM {instagramHandle}
          </a>
        </div>
      </div>
    </div>
  );
}
