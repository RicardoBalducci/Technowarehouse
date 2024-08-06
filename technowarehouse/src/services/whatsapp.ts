import axios from "axios";

const sendMessage = async (phoneNumber: string, message: string) => {
  const url = "https://api.whatsapp.com/send";
  const params = {
    phone: phoneNumber,
    text: message,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error("Error al enviar el mensaje: " + error);
  }
};

export default sendMessage;

//RVX9KTQ88PM16YWGE2GUTL8J
