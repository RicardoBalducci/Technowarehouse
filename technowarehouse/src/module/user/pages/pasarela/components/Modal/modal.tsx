import React from "react";
import styles from "./modal.module.css"; // Import your styles

const Modal = ({ isOpen, onClose, children }) => {
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
