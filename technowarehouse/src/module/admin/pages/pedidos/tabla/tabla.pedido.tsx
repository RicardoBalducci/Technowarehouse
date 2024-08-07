import { useEffect, useState } from "react";
import { Pedido } from "../interface/pedido.interface";
import { viewData } from "../../../../../services/supabase";
import { Tables } from "../../../../../types/core";
import Modal from "../components/Modal"; // Asegúrate de importar el modal
import CustomAlert from "../components/alert/Alert";
import styles from "./tabla.module.css"; // Asegúrate de importar los estilos
import { supabase } from "../../../../../services/supabase";

function TablaPedido() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState<Pedido | null>(
    null
  );
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const fetchPedidos = async () => {
      const { data, error } = await viewData(Tables.pedido);
      if (error) {
        console.error("Error al obtener los pedidos:", error);
      } else {
        setPedidos(data || []);
      }
    };

    fetchPedidos();
  }, []);

  const cancelarPedido = async (id: number) => {
    const { error } = await supabase
      .from(Tables.pedido)
      .update({ estado: "cancelado" })
      .eq("id", id);

    if (error) {
      console.error("Error al cancelar el pedido:", error);
    } else {
      setPedidos(pedidos.filter((pedido) => pedido.id !== id));
      setPedidoSeleccionado(null);
      mostrarAlerta();
    }
  };

  const mostrarDetalles = (pedido: Pedido) => {
    setPedidoSeleccionado(pedido);
  };

  const cerrarModal = () => {
    setPedidoSeleccionado(null);
  };

  const mostrarAlerta = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  const pedidosNoCancelados = pedidos.filter(
    (pedido) => pedido.estado !== "cancelado"
  );

  return (
    <>
      <CustomAlert
        open={alertVisible}
        handleClose={() => setAlertVisible(false)}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Precio a Pagar $</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidosNoCancelados.length > 0 ? (
            pedidosNoCancelados.map((pedido) => (
              <tr key={pedido.id} onClick={() => mostrarDetalles(pedido)}>
                <td>{pedido.id}</td>
                <td>{pedido.cedula_user}</td>
                <td>{pedido.name_user}</td>
                <td
                  className={
                    pedido.estado === "pendiente" ? styles.estadoPendiente : ""
                  }
                >
                  {pedido.estado}
                </td>
                <td>{pedido.total}</td>
                <td>{pedido.cantidad}</td>
                <td>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      cancelarPedido(pedido.id);
                    }}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No hay pedidos pendientes.</td>
            </tr>
          )}
        </tbody>
      </table>

      {pedidoSeleccionado && (
        <Modal
          pedido={pedidoSeleccionado}
          onClose={cerrarModal}
          onCancel={cancelarPedido}
          showAlert={mostrarAlerta}
        />
      )}
    </>
  );
}

export default TablaPedido;
