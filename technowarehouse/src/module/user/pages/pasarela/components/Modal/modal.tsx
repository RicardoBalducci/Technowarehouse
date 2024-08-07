import React from "react";
import styles from "./modal.module.css"; // Import your styles

// Definición de la interfaz para las props del Modal
interface ModalProps {
  isOpen: boolean; // Indica si el modal está abierto
  onClose: () => void; // Función para cerrar el modal
  children: React.ReactNode; // Contenido que se pasará al modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
