import "./ProductCard.css";

function ProductCard({ product, onView }) {
  const firstPrice = product.sizes[0].price;

  const handleOrder = () => {
    const message = `Hi, I'm interested in ${product.name}.`;

    window.open(
      `https://wa.me/917204096079?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3>{product.name}</h3>

      {product.kannada && (
        <p className="kannada">{product.kannada}</p>
      )}

      <p className="price">
        Starting from <strong>₹{firstPrice}</strong>
      </p>

      <div className="product-buttons">

        <button
          className="view-btn"
          onClick={() => onView(product)}
        >
         View Details
        </button>

        <button
          className="order-btn"
          onClick={handleOrder}
        >
          💬 WhatsApp Order
        </button>

      </div>

    </div>
  );
}

export default ProductCard;