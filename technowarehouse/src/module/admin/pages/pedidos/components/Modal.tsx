import React from "react";
import styles from "./modal.module.css"; // Ensure you have styles for the modal
import { Pedido } from "../interface/pedido.interface"; // Import the Pedido interface

interface ModalProps {
  pedido: Pedido | null; // The pedido can be null if not selected
  onClose: () => void; // Function to close the modal
  onCancel: (id: number) => void; // Function to cancel the pedido
  showAlert: () => void; // Function to show alert
}

const Modal: React.FC<ModalProps> = ({
  pedido,
  onClose,
  onCancel,
  showAlert,
}) => {
  if (!pedido) return null; // Don't render if there's no pedido

  const handleCancel = () => {
    onCancel(pedido.id); // Call the cancel function with the pedido ID
    showAlert(); // Show alert after cancellation
    onClose(); // Close the modal
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.Detalles}>Detalles del Pedido</h2>
        <p className={styles.info}>
          <strong>ID:</strong> {pedido.id}
        </p>
        <p className={styles.info}>
          <strong>Cédula:</strong> {pedido.cedula_user}
        </p>
        <p className={styles.info}>
          <strong>Nombre:</strong> {pedido.name_user}
        </p>
        <p className={styles.info}>
          <strong>Estado: </strong>
          <span
            className={
              pedido.estado === "pendiente" ? styles.estadoPendiente : ""
            }
          >
            {pedido.estado}
          </span>
        </p>
        <p className={styles.info}>
          <strong>Precio a Pagar ($):</strong> {pedido.total}$
        </p>
        <p className={styles.info}>
          <strong>Cantidad:</strong> {pedido.cantidad}
        </p>
        <button onClick={onClose} className={styles.boton}>
          Cerrar
        </button>
        <button onClick={handleCancel} className={styles.cancelButton}>
          Cancelar Pedido
        </button>
      </div>
    </div>
  );
};

export default Modal;
