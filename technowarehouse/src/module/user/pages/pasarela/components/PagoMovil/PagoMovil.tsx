import styles from "./pagomovil.module.css";
function PagoMovil() {
  return (
    <>
      <div className={styles.Contenedor}>
        <h1>Pago Movil</h1>
        <p className={styles.titulo}>Teléfono </p>
        <p className={styles.datos}>04121167473</p>
        <p className={styles.titulo}>Cédula</p>
        <p className={styles.datos}>30729553</p>
      </div>
    </>
  );
}
export default PagoMovil;
