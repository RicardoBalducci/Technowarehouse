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
    // Actualiza el estado del pedido en Supabase
    const { error } = await supabase
      .from(Tables.pedido)
      .update({ estado: "cancelado" }) // Cambia el estado a 'cancelado'
      .eq("id", id); // Filtra por el ID del pedido

    if (error) {
      console.error("Error al cancelar el pedido:", error);
    } else {
      // Actualiza el estado local
      setPedidos(pedidos.filter((pedido) => pedido.id !== id));
      setPedidoSeleccionado(null);
      mostrarAlerta(); // Mostrar alerta al cancelar
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

  // Filtrar pedidos que no están cancelados
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
            <th>Total</th>
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
                <td>{pedido.estado}</td>
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
          onCancel={cancelarPedido} // Asegúrate de pasar onCancel aquí
          showAlert={mostrarAlerta}
        />
      )}
    </>
  );
}

export default TablaPedido;
