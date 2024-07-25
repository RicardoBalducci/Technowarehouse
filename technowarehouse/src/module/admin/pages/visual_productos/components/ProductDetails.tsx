import styles from './ProductDetails.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.image_container}>
        <img src={product.imageUrl} alt={product.name} className={styles.product_image} />
      </div>
      <div className={styles.product_info}>
        <h3 className={styles.product_name}>{product.name}</h3>
        <p className={styles.product_description}>{product.description}</p>
        <p className={styles.product_price}>${product.price.toFixed(2)}</p>
        <button className={styles.buy_button}>Comprar</button>
      </div>
    </div>
  );
};

export default ProductDetails;