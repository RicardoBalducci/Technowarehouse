import axios from "axios";

async function enviarMensaje(numeroTelefono: string, mensaje: string) {
  try {
    const response = await axios.post("https://api.whatsapp.com/send", {
      phone: numeroTelefono,
      text: mensaje,
    });

    console.log("Mensaje enviado correctamente");
    console.log("Respuesta:", response.data);
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
  }
}

// Ejemplo de uso
const numeroTelefono = "4120951000"; // Reemplaza con el número de teléfono de destino
const mensaje =
  "¡Hola! Este es un mensaje de prueba enviado desde mi programa en TypeScript";

enviarMensaje(numeroTelefono, mensaje);
