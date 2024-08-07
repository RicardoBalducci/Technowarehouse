import React, { useState } from "react";
import styles from "./pasarela.module.css"; // Adjust the path as necessary
import PagoMovil from "./components/PagoMovil/PagoMovil";
import Binance from "./components/binance/Binance";

interface PaymentModalProps {
  isOpen: boolean;
  closeModal: () => void;
  user: {
    nombre: string;
    email: string;
  };
  agregarPedido: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  closeModal,
  user,
  agregarPedido,
}) => {
  // Ensure useState is called at the top level
  const [activeTab, setActiveTab] = useState("tab1");

  // Check if the modal should be open
  if (!isOpen) return null;

  // Function to render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <>
            <Binance />
          </>
        );

      case "tab3":
        return (
          <>
            <PagoMovil />
          </>
        );
      default:
        return <h1>Contenido de la Pestaña 1</h1>;
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>
          <h2 className={styles.Titulo}>Pasarela de Pago</h2>
          <button onClick={() => setActiveTab("tab1")} className={styles.btn1}>
            Binance
          </button>
          <button onClick={() => setActiveTab("tab3")} className={styles.btn3}>
            Pago Movil
          </button>
          <div>{renderTabContent()}</div>
          <button onClick={agregarPedido} className={styles.button}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
