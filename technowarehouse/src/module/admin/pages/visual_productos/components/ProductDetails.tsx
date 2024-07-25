// ProductDetails.tsx
import React from 'react';
import styles from './ProductDetails.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles.product_details}>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetails;
