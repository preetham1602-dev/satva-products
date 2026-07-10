import "./ProductModal.css";

function ProductModal({ product, onClose }) {
  const handleOrder = (size) => {
    const message = `Hi, I'm interested in ${product.name} (${size.size}).`;

    window.open(
      `https://wa.me/917204096079?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-content">

          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="modal-details">

            <h2>{product.name}</h2>

            {product.kannada && (
              <p className="kannada">{product.kannada}</p>
            )}

            <h3>Benefits</h3>

            <ul>
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h3>Available Sizes</h3>

            {product.sizes.map((size, index) => (
              <div key={index} className="size-row">
                <span>{size.size}</span>
                <span>₹{size.price}</span>

                <button
                  className="modal-order-btn"
                  onClick={() => handleOrder(size)}
                >
                  Order On WhatsApp
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductModal;