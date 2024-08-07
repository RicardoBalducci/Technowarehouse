import { useState, useEffect } from "react";
import { supabase } from "../../../../../services/supabase";
import { Tables } from "../../../../../types/core";
import { Proveedor } from "../../../../../interface/Proveedor.interface";

function useProveedorData() {
  const [proveedorData, setProveedorData] = useState<Proveedor[]>([]);
  const [totalProveedor, setTotalProveedor] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from(Tables.proveedor).select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setProveedorData(data as Proveedor[]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const calculateTotalProveedor = () => {
      const count = proveedorData.length; // Corregido: se cambió setProveedorData por proveedorData
      setTotalProveedor(count);
    };

    calculateTotalProveedor();
  }, [proveedorData]);

  return totalProveedor;
}

export default useProveedorData;
