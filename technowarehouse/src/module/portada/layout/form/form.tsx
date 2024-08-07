import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./form.module.css";
import Swal from "sweetalert2";

function Contactanos() {
  const [formData, setFormData] = useState({
    user_email: "",
    emailDetails: "",
    from_name: "", // Sender's name
    to_name: "Your Name", // Replace with your name or recipient's name
    tlf_user: "", // User's phone
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_i7ogif7", // Replace with your service ID
        "template_wxdvkdz", // Replace with your template ID
        {
          from_name: formData.from_name,
          to_name: formData.to_name,
          user_email: formData.user_email,
          message: formData.emailDetails,
          tlf_user: formData.tlf_user,
        },
        "v5cULHH4wd_SCf2Oo" // Replace with your user ID
      )
      .then(
        (response) => {
          Swal.fire({
            title: "¡Excelente!",
            text: "Mensaje enviado exitosamente",
            icon: "success",
          });
          console.log(response);
          // Clear the form after sending
          setFormData({
            user_email: "",
            emailDetails: "",
            from_name: "",
            to_name: "Your Name", // Reset to your name or recipient's name
            tlf_user: "",
          });
        },
        (err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Algo salió mal!",
          });
          console.error("Error:", err);
        }
      );
  };

  return (
    <div>
      <h1 className={styles.title}>Contáctanos</h1>
      <p className={styles.subtitle}>
        Si deseas contactarnos, completa el formulario y nos pondremos en
        contacto contigo en breve.
      </p>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="from_name"
            placeholder="Ingrese su nombre"
            required
            value={formData.from_name}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Ingrese su correo"
            required
            value={formData.user_email}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="tlf_user"
            placeholder="Teléfono"
            required
            value={formData.tlf_user}
            onChange={handleChange}
            className={styles.input}
          />
          <textarea
            name="emailDetails"
            placeholder="Ingrese su mensaje"
            className={styles.textarea}
            value={formData.emailDetails}
            onChange={handleChange}
          />
          <button type="submit" className={styles.btn}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactanos;
