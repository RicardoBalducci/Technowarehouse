import styles from "../PagoMovil/pagomovil.module.css";
function Mercantil() {
  return (
    <>
      <div className={styles.Contenedor}>
        <h1>Transferencia</h1>
        <p className={styles.titulo}>Banco</p>
        <p className={styles.datos}>Mercantil</p>
        <p className={styles.titulo}>Cédula</p>
        <p className={styles.datos}>28308177</p>
        <p className={styles.titulo}>Número de cuenta</p>
        <p className={styles.datos}>01050768510768000599</p>
      </div>
    </>
  );
}
export default Mercantil;
