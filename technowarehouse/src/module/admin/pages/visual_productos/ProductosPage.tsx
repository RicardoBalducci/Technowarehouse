// ProductosPage.tsx
import React from 'react';
import ProductList from './components/ProductList';

const ProductosPage: React.FC = () => {
  return (
    <div className="productos-page">
      <h1>Productos</h1>
      <ProductList />
    </div>
  );
};

export default ProductosPage;
