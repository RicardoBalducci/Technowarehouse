import ProductList from "./components/ProductList";
import styles from "./ProductosPage.module.css";
import Cabecera from "../../components/menu";
import Footer from "../../../portada/components/Footer";

function ProductosPage() {
  return (
    <div className={styles.productos_page}>
      <Cabecera />
      <div className={styles.content_wrapper}>
        <main className={styles.main_content}>
          <h2 className={styles.section_title}>Productos Destacados</h2>
          <ProductList />
        </main>
      </div>
      <div className={styles.footer}>
        <p></p>
        <Footer />
      </div>
    </div>
  );
}

export default ProductosPage;

/*
<button onClick={() => setShowBrandFilter(!showBrandFilter)}>
            Marca
          </button>
          {showBrandFilter && (
            <ul>
              <li>Marca 1</li>
              <li>Marca 2</li>
            </ul>
          )}
*/
