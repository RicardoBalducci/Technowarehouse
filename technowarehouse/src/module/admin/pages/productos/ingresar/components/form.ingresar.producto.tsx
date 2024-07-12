import styles from "./form.product.module.css";

function FormProduct() {
  return (
    <>
      <div className={styles.container}>
        <h1>Ingresar producto</h1>
        <form action="" className={styles.form}>
          <div className={styles.gridContainer}>
            <div>
              <p className={styles.titulo}>Nombre del producto</p>
              <input
                type="text"
                className={styles.input}
                placeholder="Ingrese el nombre del producto"
              />
            </div>
            <div>
              <p className={styles.titulo}>Precio</p>
              <input
                type="text"
                className={styles.input}
                placeholder="Ingrese el precio del producto"
              />
            </div>
            <div>
              <p className={styles.titulo}>Cantidad de stock</p>
              <input
                type="text"
                className={styles.input}
                placeholder="Ingrese la cantidad de stock"
              />
            </div>
            <div>
              <p className={styles.titulo}>Proveedor</p>
              <input
                type="text"
                className={styles.input}
                placeholder="Ingrese el proveedor del producto"
              />
            </div>
            <div>
              <p className={styles.titulo}>Imagen</p>
              <input
                type="text"
                className={styles.input}
                placeholder="Ingrese una imagen"
              />
            </div>
            <div>
              <p className={styles.titulo}>Descripción</p>
              <input
                type="text"
                placeholder="Ingrese una descripción del producto"
              />
            </div>
          </div>
          <button className={styles.button}>Guardar</button>
        </form>
      </div>
    </>
  );
}

export default FormProduct;
