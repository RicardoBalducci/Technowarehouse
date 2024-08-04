import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Error = ({ open, handleClose }) => {
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
