import { useState, useEffect } from "react";
import { supabase } from "../../../../../services/supabase";
import { Tables } from "../../../../../types/core";
import { Pedido } from "../../pedidos/interface/pedido.interface"; // Adjust the import path as necessary

function useTotalCanceledOrders() {
  const [totalCanceled, setTotalCanceled] = useState<number>(0);
  const [canceledOrders, setCanceledOrders] = useState<Pedido[]>([]);

  useEffect(() => {
    const fetchCanceledOrders = async () => {
      const { data, error } = await supabase
        .from(Tables.pedido)
        .select("total")
        .eq("estado", "cancelado"); // Filter for canceled orders

      if (error) {
        console.error("Error fetching canceled orders:", error);
      } else {
        setCanceledOrders(data as Pedido[]);
      }
    };

    fetchCanceledOrders();
  }, []);

  useEffect(() => {
    const sumCanceledOrders = () => {
      const total = canceledOrders.reduce((sum, order) => sum + order.total, 0);
      setTotalCanceled(total);
    };

    sumCanceledOrders();
  }, [canceledOrders]);

  return totalCanceled;
}

export default useTotalCanceledOrders;
