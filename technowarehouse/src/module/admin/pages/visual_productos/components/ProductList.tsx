// ProductList.tsx
import React from 'react';
import ProductDetails from './ProductDetails';

const products = [
  // Sample product data (replace with your actual data)
  { id: 1, name: 'Producto 1', price: 19.99, imageUrl: 'product1.jpg' },
  // Add more products here...
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductDetails key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
