import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// Definición de la interfaz para las props del componente Error
interface ErrorProps {
  open: boolean; // Indica si el Snackbar está abierto
  handleClose: () => void; // Función para cerrar el Snackbar
}

const Error: React.FC<ErrorProps> = ({ open, handleClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={8000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }} // Posición en la parte superior
    >
      <Alert onClose={handleClose} severity="error" variant="filled">
        This is a filled error Alert.
      </Alert>
    </Snackbar>
  );
};

export default Error;
