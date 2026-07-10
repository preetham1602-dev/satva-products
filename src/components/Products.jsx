import { useState } from "react";
import "./Products.css";
import products from "../data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";


function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="products">
      <h2>Our Products</h2>

      <p className="products-subtitle">
        Premium Ayurvedic oils made with carefully selected ingredients.
      </p>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

export default Products;