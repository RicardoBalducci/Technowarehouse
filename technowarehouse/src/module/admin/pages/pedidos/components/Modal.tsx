import styles from "./modal.module.css";
import { Pedido } from "../interface/pedido.interface";

interface ModalProps {
  pedido: Pedido; // Usar la interfaz para tipar el pedido
  onClose: () => void;
  onCancel: (id: number) => void;
  showAlert: () => void;
}

function Modal({ pedido, onClose, onCancel, showAlert }: ModalProps) {
  const handleCancel = () => {
    onCancel(pedido.id); // Llama a la función de cancelación con el ID del pedido
    showAlert(); // Muestra la alerta
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Detalles del Pedido</h2>
        <p>
          <strong>ID:</strong> {pedido.id}
        </p>
        <p>
          <strong>Nombre del Usuario:</strong> {pedido.name_user}
        </p>
        <p>
          <strong>Estado:</strong> {pedido.estado}
        </p>
        <p>
          <strong>Total:</strong> {pedido.total.toFixed(2)} $
        </p>
        <p>
          <strong>Cantidad:</strong> {pedido.cantidad}
        </p>
        <div className={styles.buttonContainer}>
          <button onClick={onClose} className={styles.closeButton}>
            Cerrar
          </button>
          {!pedido.estado.includes("Pagado") && ( // Cambia la lógica según tu estado
            <button onClick={handleCancel} className={styles.cancelButton}>
              Cancelar Pedido
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
