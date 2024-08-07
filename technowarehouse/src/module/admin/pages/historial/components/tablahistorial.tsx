import { useEffect, useState } from "react";
import { Pedido } from "../../pedidos/interface/pedido.interface";
import { viewData } from "../../../../../services/supabase";
import { Tables } from "../../../../../types/core";
import CustomAlert from "../../pedidos/components/alert/Alert";
import styles from "./tablahistorial.module.css"; // Asegúrate de importar los estilos
import { supabase } from "../../../../../services/supabase";

const ITEMS_PER_PAGE = 5; // Define how many items you want per page

function TablaHistorial() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
      .update({ estado: "cancelado" }) // Cambia el estado a 'cancelado'
      .eq("id", id); // Filtra por el ID del pedido

    if (error) {
      console.error("Error al cancelar el pedido:", error);
    } else {
      setPedidos(pedidos.filter((pedido) => pedido.id !== id));
      mostrarAlerta(); // Mostrar alerta al cancelar
    }
  };

  const mostrarAlerta = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  // Filtrar pedidos que están cancelados
  const pedidosCancelados = pedidos.filter(
    (pedido) => pedido.estado === "cancelado"
  );

  // Calculate the index of the last item on the current page
  const indexOfLastPedido = currentPage * ITEMS_PER_PAGE;
  // Calculate the index of the first item on the current page
  const indexOfFirstPedido = indexOfLastPedido - ITEMS_PER_PAGE;
  // Get the current pedidos
  const currentPedidos = pedidosCancelados.slice(
    indexOfFirstPedido,
    indexOfLastPedido
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(pedidosCancelados.length / ITEMS_PER_PAGE);

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
          {currentPedidos.length > 0 ? (
            currentPedidos.map((pedido) => (
              <tr key={pedido.id}>
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
              <td colSpan={7}>No hay pedidos cancelados disponibles.</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default TablaHistorial;
