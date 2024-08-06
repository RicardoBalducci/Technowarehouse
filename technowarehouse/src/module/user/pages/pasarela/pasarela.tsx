import React, { useState } from "react";
import Modal from "./components/Modal/modal"; // Import the Modal component
function Pasarela() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Pasarela</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <p>
            Al realizar el pago, por favor enviar mensaje con el capture a este
            numero
          </p>
        </div>
      </Modal>
    </>
  );
}

export default Pasarela;
/*

import React, { useState } from "react";
import Modal from "./components/Modal/modal"; // Import the Modal component
import PayPal from "./components/Paypal/Paypal";
function Pasarela() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1"); // State to manage active tab

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <>
            <h1>Contenido de la Pestaña 1</h1>
            <h2>Binance</h2>
          </>
        );
      case "tab2":
        return (
          <>
            <h1>Contenido de la Pestaña 2</h1>
          </>
        );
      case "tab3":
        return <PayPal />;
      default:
        return <h1>Contenido de la Pestaña 1</h1>;
    }
  };

  return (
    <>
      <button onClick={openModal}>Open Pasarela</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <div>
            <button onClick={() => setActiveTab("tab1")} className="">Pestaña 1</button>
            <button onClick={() => setActiveTab("tab2")} className="">Pestaña 2</button>
            <button onClick={() => setActiveTab("tab3")} className="">Pestaña 3</button>
          </div>
         
          <div>{renderTabContent()}</div>
          <p>
            Al realizar el pago, por favor enviar mensaje con el capture a este
            numero
          </p>
        </div>
      </Modal>
    </>
  );
}

export default Pasarela;

*/
