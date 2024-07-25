import { useState } from 'react';
import ProductList from "./components/ProductList";
import styles from "./ProductosPage.module.css";

function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [showBrandFilter, setShowBrandFilter] = useState(false);

  return (
    <div className={styles.productos_page}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Technowarehouse</h1>
        <div className={styles.search_bar}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#"><i className="cart-icon">🛒</i></a></li>
            <li><a href="#">user</a></li>
            <li><a href="#">Cerrar Sesion</a></li>
          </ul>
        </nav>
      </header>
      <div className={styles.content_wrapper}>
        <aside className={styles.filters_sidebar}>
          <button onClick={() => setShowCategoryFilter(!showCategoryFilter)}>Categoría</button>
          {showCategoryFilter && (
            <ul>
              {/* Aquí irían las categorías */}
              <li>Categoría 1</li>
              <li>Categoría 2</li>
              {/* ... */}
            </ul>
          )}
          <button onClick={() => setShowBrandFilter(!showBrandFilter)}>Marca</button>
          {showBrandFilter && (
            <ul>
              {/* Aquí irían las marcas */}
              <li>Marca 1</li>
              <li>Marca 2</li>
              {/* ... */}
            </ul>
          )}
        </aside>
        <main className={styles.main_content}>
          <h2 className={styles.section_title}>Productos Destacados</h2>
          <ProductList searchTerm={searchTerm} />
        </main>
      </div>
    </div>
  );
}

export default ProductosPage;