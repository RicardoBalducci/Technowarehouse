import AlertMui from "@mui/material/Alert"; // Importar el componente Alert
import Snackbar from "@mui/material/Snackbar"; // Importar Snackbar

// Definir la interfaz para las props
interface CustomAlertProps {
  open: boolean; // Tipo para el estado de apertura
  handleClose: () => void; // Tipo para la función de cierre
}

function CustomAlert({ open, handleClose }: CustomAlertProps) {
  return (
    <Snackbar
      open={open} // Controlar la visibilidad
      autoHideDuration={3000} // Duración antes de ocultar automáticamente
      onClose={handleClose} // Manejar el cierre
      anchorOrigin={{ vertical: "top", horizontal: "center" }} // Posición de la alerta
    >
      <AlertMui onClose={handleClose} variant="outlined" severity="success">
        Pedido cancelado exitosamente.
      </AlertMui>
    </Snackbar>
  );
}

export default CustomAlert; // Exportar el componente
