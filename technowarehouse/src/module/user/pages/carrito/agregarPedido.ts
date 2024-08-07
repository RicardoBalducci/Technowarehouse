import { supabase } from "../../../../services/supabase";
import { Tables } from "../../../../types/core";
import Snackbar from "@mui/material/Snackbar";

const agregarPedido = async (user: any, carrito: CarritoItem[]) => {
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
    // Crear un nuevo pedido basado en el carrito
    const nuevoPedido = {
      cedula_user: user.cedula, // Usar la cédula del usuario logueado
      name_user: user.nombre, // Usar el nombre del usuario logueado
      estado: "pendiente", // Estado inicial del pedido
      total: total,
      cantidad: carrito.reduce((acc, item) => acc + item.cantidad, 0), // Total de productos
      fecha: new Date().toISOString().split("T")[0], // Fecha de hoy en formato YYYY-MM-DD
    };

    // Insertar el nuevo pedido en la base de datos
    const { error } = await supabase.from(Tables.pedido).insert([nuevoPedido]);

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
