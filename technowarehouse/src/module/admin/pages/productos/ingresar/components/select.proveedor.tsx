import { useState, useEffect, ChangeEvent } from "react";
import { supabase } from "../../../../../../services/supabase";
import { Proveedor } from "../../../../..//../interface/Proveedor.interface";
import styles from "./form.product.module.css";
interface SelectProveedorProps {
  onProveedorChange: (selectedProveedorId: string) => void;
  defaultValue?: string; // Nueva prop defaultValue
}
function SelectProveedor({
  onProveedorChange,
  defaultValue,
}: SelectProveedorProps) {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [proveedorSeleccionado, setProveedorSeleccionado] =
    useState<string>("");

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const { data, error } = await supabase.from("proveedor").select("*");
        if (error) {
          throw error;
        }
        setProveedores(data);
      } catch (error) {
        console.error("Error al obtener los proveedores:", error);
      }
    };
    if (defaultValue) {
      setProveedorSeleccionado(defaultValue);
      onProveedorChange(defaultValue);
    }

    fetchProveedores();
  }, [defaultValue]);

  const handleProveedorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedProveedorId = event.target.value;
    setProveedorSeleccionado(selectedProveedorId);
    onProveedorChange(selectedProveedorId);
  };

  return (
    <select
      value={proveedorSeleccionado}
      onChange={handleProveedorChange}
      className={styles.selector}
    >
      <option value="">Seleccionar proveedor</option>
      {proveedores.map((proveedor: Proveedor) => (
        <option key={proveedor.name} value={proveedor.name}>
          {proveedor.name}
        </option>
      ))}
    </select>
  );
}

export default SelectProveedor;
