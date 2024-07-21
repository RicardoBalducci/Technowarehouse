// ProductDetails.tsx
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
