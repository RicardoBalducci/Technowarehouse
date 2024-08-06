import React, { useState } from "react";
import styles from "./pasarela.module.css"; // Adjust the path as necessary

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
            <h1>Contenido de la Pestaña 1</h1>
            <h2>Binance</h2>
          </>
        );
      case "tab2":
        return (
          <>
            <h1>Contenido de la Pestaña 2</h1>
          </>
        );
      case "tab3":
        return (
          <>
            <h1>Pago Movil</h1>
            <p>Nombre: {user.nombre}</p>
            <p>Email: {user.email}</p>
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
          <h2>Pasarela de Pago</h2>
          <button onClick={() => setActiveTab("tab1")} className="">
            Pestaña 1
          </button>
          <button onClick={() => setActiveTab("tab2")} className="">
            Pestaña 2
          </button>
          <button onClick={() => setActiveTab("tab3")} className="">
            Pestaña 3
          </button>
          <div>{renderTabContent()}</div>
          <p>Producto: {user.nombre}</p>
          <button onClick={agregarPedido}>Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
