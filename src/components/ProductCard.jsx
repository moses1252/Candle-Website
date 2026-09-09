import './ProductCard.css';

// Simple emoji icon map — replace the whole icon block with <img> tags
// once you have real product photos.
const icons = {
  snowflake: '❄',
  moon: '☾',
  sun: '☀',
  flame: '🔥',
  flower: '✿',
  droplet: '💧',
  cocktail: '🍹',
  'moon-stars': '✦',
  leaf: '🍂',
};

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <span className="product-icon">{icons[product.icon] || '☾'}</span>
      </div>
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        {product.note && <p className="product-note">{product.note}</p>}
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}
