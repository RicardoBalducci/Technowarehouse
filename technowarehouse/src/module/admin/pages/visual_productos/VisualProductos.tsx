import ProductList from "./components/ProductList";
import styles from "./ProductosPage.module.css";

function ProductosPage() {
  return (
    <div className={styles.productos_page}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Technowarehouse</h1>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#"><i className="cart-icon">🛒</i></a></li>
            <li><a href="#">user</a></li>
            <li><a href="#">Cerrar Sesion</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main_content}>
        <h2 className={styles.section_title}>Productos Destacados</h2>
        <ProductList />
      </main>
    </div>
  );
}

export default ProductosPage;