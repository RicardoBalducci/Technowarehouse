import styles from "./ProductDetails.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { Product } from "../../../../../interface/Product.interface";

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const [, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault(); // Usar event para prevenir el comportamiento predeterminado
    setSelectedProduct(product);
    navigate(`/Informacion?id=${product.id}`);
  };

  return (
    <div className={styles.product_card}>
      <div className={styles.image_container}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.product_image}
        />
      </div>
      <div className={styles.product_info}>
        <h3 className={styles.product_name}>{product.name}</h3>
        <p className={styles.product_price}>${product.precio.toFixed(2)}</p>
        <button onClick={handleProductClick} className={styles.buy_button}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
