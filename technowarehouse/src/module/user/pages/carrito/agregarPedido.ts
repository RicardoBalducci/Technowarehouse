import { supabase } from "../../../../services/supabase";
import { Tables } from "../../../../types/core";

interface User {
  cedula: string;
  nombre: string;
}

interface CarritoItem {
  cantidad: number;
  precio: number; // Ensure this field is present
}

// Define the function limpiarCarrito
const limpiarCarrito = () => {
  // Implement the logic to clear the cart
  console.log("Carrito limpiado");
};

const agregarPedido = async (
  user: User | null,
  carrito: CarritoItem[],
  setSnackbarMessage: (message: string) => void,
  setSnackbarOpen: (open: boolean) => void
) => {
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
    const total = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    ); // Calculate total

    // Create a new order based on the cart
    const nuevoPedido = {
      cedula_user: user.cedula,
      name_user: user.nombre,
      estado: "pendiente",
      total: total,
      cantidad: carrito.reduce((acc, item) => acc + item.cantidad, 0),
      fecha: new Date().toISOString().split("T")[0],
    };

    // Insert the new order into the database
    const { error } = await supabase.from(Tables.pedido).insert([nuevoPedido]);

    if (error) {
      console.error("Error al agregar el pedido:", error);
      setSnackbarMessage("Error al agregar el pedido.");
    } else {
      setSnackbarMessage("Pedido agregado exitosamente.");
      limpiarCarrito(); // Clear the cart after adding the order
    }
    setSnackbarOpen(true); // Show the snackbar with the message
  } catch (err: unknown) {
    console.error("Error inesperado:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Error desconocido";
    setSnackbarMessage(
      "Error inesperado al agregar el pedido: " + errorMessage
    );
    setSnackbarOpen(true);
  }
};

export default agregarPedido;
