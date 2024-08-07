import React, { useState } from "react";
import sendMessage from "../../../../../services/whatsapp";

const SendMessage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleSendMessage = async () => {
    if (!phoneNumber || !message) {
      setResponse("Por favor, ingresa un número de teléfono y un mensaje.");
      return;
    }

    try {
      const result = await sendMessage(phoneNumber, message);
      setResponse("Mensaje enviado: " + JSON.stringify(result));
    } catch (error) {
      setResponse("Error al enviar el mensaje: " + error.message);
    }
  };

  return (
    <div>
      <h1>Enviar Mensaje de WhatsApp</h1>
      <input
        type="text"
        placeholder="Número de teléfono"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <textarea
        placeholder="Escribe tu mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Enviar</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default SendMessage;
