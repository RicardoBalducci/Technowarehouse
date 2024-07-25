// visual_productos.tsx
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import styles from "./ProductosPage.module.css";
function ProductosPage() {
  return (
    //MODIFICACION HECHA
    <div className={styles.productos_page}>
      <h1>Productos</h1>
      <ProductList />
    </div>
  );
}

export default ProductosPage;
