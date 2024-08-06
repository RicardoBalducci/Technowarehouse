import React, { useState, useEffect } from "react";
import styles from "./carrito.module.css";
import Cabecera from "../../components/menu";
import Footer from "../../../portada/components/Footer";
import { CartItem } from "./interface/Carrito.interface";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Producto } from "./interface/Carrito.interface";
import { supabase } from "../../../../services/supabase"; // Asegúrate de importar tu cliente de Supabase
import { Tables } from "../../../../types/core";
import { useLocation } from "react-router-dom";
import PaymentModal from "../pasarela/pasarela";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Carrito() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [carrito, setCarrito] = useState<CartItem[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const location = useLocation();
  const { user } = location.state || {}; // Obtener los datos del usuario

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setCarrito(storedCarrito);
  }, []);

  const limpiarCarrito = () => {
    localStorage.removeItem("carrito");
    setCarrito([]);
    setSnackbarMessage("Carrito limpiado.");
    setSnackbarOpen(true);
  };

  const eliminarItem = (index: number) => {
    const updatedCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(updatedCarrito);
    localStorage.setItem("carrito", JSON.stringify(updatedCarrito));
    setSnackbarMessage("Producto eliminado del carrito.");
    setSnackbarOpen(true);
  };

  const aumentarCantidad = (index: number) => {
    const item = carrito[index] as CartItem;
    const availableStock = (item.producto as Producto).stock;

    if (item.cantidad < availableStock) {
      const updatedCarrito = carrito.map((item, i) => {
        if (i === index) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
      });
      setCarrito(updatedCarrito);
      localStorage.setItem("carrito", JSON.stringify(updatedCarrito));
    } else {
      setSnackbarMessage(
        `No hay suficiente stock. Solo quedan ${availableStock} unidades.`
      );
      setSnackbarOpen(true);
    }
  };

  const disminuirCantidad = (index: number) => {
    const updatedCarrito = carrito.map((item, i) => {
      if (i === index && item.cantidad > 1) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    });
    setCarrito(updatedCarrito);
    localStorage.setItem("carrito", JSON.stringify(updatedCarrito));
  };

  const total = carrito.reduce(
    (acc, item) => acc + (item.producto as Producto).precio * item.cantidad,
    0
  );

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  // Crear un nuevo pedido basado en el carrito
  const nuevoPedido = {
    cedula_user: user.cedula, // Usar la cédula del usuario logueado
    name_user: user.nombre, // Usar el nombre del usuario logueado
    estado: "pendiente", // Estado inicial del pedido
    total: total,
    cantidad: carrito.reduce((acc, item) => acc + item.cantidad, 0), // Total de productos
    fecha: new Date().toISOString().split("T")[0], // Fecha de hoy en formato YYYY-MM-DD
  };

  const MODAL = async () => {
    setModalOpen(true);
  };

  //////AGREGAR PEDIDO
  const agregarPedido = async () => {
    if (!user) {
      setSnackbarMessage("No se ha encontrado información del usuario.");
      setSnackbarOpen(true);
      return;
    }
    if (carrito.length === 0) {
      setSnackbarMessage(
        "El carrito está vacío. Agrega productos antes de confirmar el pedido."
      );
      setSnackbarOpen(true);
      return;
    }
    try {
      setModalOpen(true);
      // Insertar el nuevo pedido en la base de datos
      const { error } = await supabase
        .from(Tables.pedido)
        .insert([nuevoPedido]);

      if (error) {
        console.error("Error al agregar el pedido:", error);
        setSnackbarMessage("Error al agregar el pedido.");
      } else {
        setSnackbarMessage("Pedido agregado exitosamente.");
        limpiarCarrito(); // Limpiar el carrito después de agregar el pedido
      }
      setSnackbarOpen(true); // Mostrar el snackbar con el mensaje
    } catch (err) {
      console.error("Error inesperado:", err);
      setSnackbarMessage("Error inesperado al agregar el pedido.");
      setSnackbarOpen(true);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Cabecera />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <h1 className={styles.h1}>Carrito de Compras</h1>
      {user && (
        <div className={styles.userInfo}>
          <h2>Información del Usuario</h2>
          <p>
            <strong>Nombre:</strong> {user.nombre}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Cédula:</strong> {user.cedula}
          </p>
        </div>
      )}
      {carrito.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Producto</th>
              <th className={styles.th}>Cantidad</th>
              <th className={styles.th}>Precio Unitario</th>
              <th className={styles.th}>Total</th>
              <th className={styles.th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item, index) => (
              <tr key={index}>
                <td>{(item.producto as Producto).name}</td>
                <td>
                  <button
                    onClick={() => disminuirCantidad(index)}
                    className={styles.btnCantidad}
                  >
                    -
                  </button>
                  <p className={styles.P}>{item.cantidad}</p>
                  <button
                    onClick={() => aumentarCantidad(index)}
                    className={styles.btnCantidad}
                  >
                    +
                  </button>
                </td>
                <td>{(item.producto as Producto).precio.toFixed(2)} $</td>
                <td>
                  {((item.producto as Producto).precio * item.cantidad).toFixed(
                    2
                  )}{" "}
                  $
                </td>
                <td>
                  <button
                    onClick={() => eliminarItem(index)}
                    className={styles.btnEliminar}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.h1}>No hay productos en el carrito.</p>
      )}

      <div className={styles.totalContainer}>
        <h2>Total</h2>
        <table className={styles.totalTable}>
          <tbody>
            <tr>
              <td>Total:</td>
              <td>{total.toFixed(2)} $</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button onClick={limpiarCarrito} className={styles.btn}>
        Limpiar Carrito
      </button>
      <button onClick={MODAL} className={styles.btn}>
        Confirmar Pedido
      </button>
      {isModalOpen && (
        <PaymentModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          user={user}
          agregarPedido={agregarPedido}
        />
      )}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Carrito;
