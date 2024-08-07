import QRCodeImage from "../../../../../../assets/codigoQR.jpeg";
import styles from "./binance.module.css"; // Import the CSS module

function Binance() {
  return (
    <div className={styles.container}>
      {" "}
      {/* Use the container class */}
      <h1 className={styles.h1}>Binance</h1>
      <img
        src={QRCodeImage}
        alt="Código QR de Binance"
        className={styles.img}
      />
    </div>
  );
}

export default Binance;
