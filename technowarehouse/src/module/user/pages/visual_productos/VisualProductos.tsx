import { useState } from "react";
import ProductList from "./components/ProductList";
import styles from "./ProductosPage.module.css";
import Cabecera from "../../components/menu";
function ProductosPage() {
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);

  const handleCategoryFilterClick = async () => {
    setShowCategoryFilter(!showCategoryFilter);
  };

  return (
    <div className={styles.productos_page}>
      <Cabecera />
      <div className={styles.content_wrapper}>
        <aside className={styles.filters_sidebar}>
          <button className={styles.button} onClick={handleCategoryFilterClick}>
            Categoría
          </button>
          {showCategoryFilter && (
            <ul>
              <button className={styles.bts}>Televisor</button>{" "}
            </ul>
          )}
        </aside>
        <main className={styles.main_content}>
          <h2 className={styles.section_title}>Productos Destacados</h2>
          <ProductList />{" "}
        </main>
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
