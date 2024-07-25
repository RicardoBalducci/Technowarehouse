import React from "react";
import ProductDetails from "./ProductDetails";
import styles from './ProductList.module.css';

const products = [
  { id: 1, name: "Producto A", price: 29.99, imageUrl: "/../../../assets/aa.webp" },
  { id: 2, name: "Producto B", price: 19.99, imageUrl: "/../../../assets/b.webp" },
  { id: 3, name: "Producto C", price: 9.99, imageUrl: "/../../../assets/c.webp"},
  { id: 4, name: "Producto D", price: 49.99, imageUrl: "/../../../assets/d.webp"},
  { id: 5, name: "Producto E", price: 39.99, imageUrl: "/../../../assets/e.webp"},
  { id: 6, name: "Producto F", price: 59.99, imageUrl: "/../../../assets/f.webp"},
  { id: 7, name: "Producto G", price: 69.99, imageUrl: "/../../../assets/g.webp"},
  { id: 8, name: "Producto H", price: 79.99, imageUrl: "/../../../assets/h.webp"},
  { id: 9, name: "Producto I", price: 89.99, imageUrl: "/../../../assets/i.webp"},
  { id: 10, name: "Producto J", price: 99.99, imageUrl: "/../../../assets/j.webp" },
];

const ProductList: React.FC = () => {
  return (
    <div className={styles.product_list_container}>
      <h2 className={styles.product_list_title}>Productos Destacados</h2>
      <div className={styles.product_list}>
        {products.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;