import React, { useEffect, useState } from "react";
import { viewData } from "../../../../../services/supabase";
import { Tables } from "../../../../../types/core";
import DataTable from "react-data-table-component"; // Importa DataTable
import { UserInterface } from "../../../../../interface/user.interface";

function TablaUsuariosAdmin() {
  const [usuarios, setUsuarios] = useState<UserInterface[]>([]); // Cambia 'any' por el tipo adecuado si tienes una interfaz definida
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setLoading(true);
      const { data, error } = await viewData(Tables.user); // Asegúrate de que 'user' es el nombre correcto de la tabla
      if (error) {
        console.error("Error al obtener los usuarios:", error);
        setError("Error al cargar los usuarios.");
      } else {
        setUsuarios(data || []);
      }
      setLoading(false);
    };

    fetchUsuarios();
  }, []);

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#468FAF",
        color: "white",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        maxWidth: "150px", // Ajusta el ancho máximo según sea necesario
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        padding: "8px", // Ajusta el padding para reducir el tamaño
      },
    },
  };

  // Define las columnas para el DataTable
  const columns = [
    {
      name: "Cédula",
      selector: (row: UserInterface) => row.cedula,
      sortable: true,
      width: "100px", // Ajusta el ancho de la columna
    },
    {
      name: "Nombre",
      selector: (row: UserInterface) => row.nombre,
      sortable: true,
      width: "150px", // Ajusta el ancho de la columna
    },
    {
      name: "Email",
      selector: (row: UserInterface) => row.email,
      sortable: true,

      width: "150px", // Ajusta el ancho de la columna
    },
    {
      name: "Teléfono",
      selector: (row: UserInterface) => row.telefono,
      sortable: true,

      width: "150px", // Ajusta el ancho de la columna
    },
    {
      name: "Dirección",
      selector: (row: UserInterface) => row.direccion,
      sortable: true,
    },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={usuarios}
        pagination
        paginationPerPage={5}
        customStyles={customStyles}
        responsive // Habilita la respuesta para pantallas más pequeñas
      />
    </>
  );
}

export default TablaUsuariosAdmin;
