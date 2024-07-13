import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { viewData } from "../../../../../services/supabase";
import { Proveedor } from "../../../../../interface/Proveedor.interface";
import { Tables } from "../../../../../types/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { deleteData } from "../../../../../services/supabase";
import Swal from "sweetalert2";
import styles from "./tabla.module.css";
import { useNavigate } from "react-router-dom";

function TablaProveedor() {
  const [datos, setDatos] = useState<Proveedor[]>([]);
  const [search, setSearch] = useState(""); // Estado para almacenar el valor de búsqueda

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await viewData(Tables.proveedor);
      if (error) {
        console.error(error);
      } else {
        setDatos(data || []);
      }
    }

    fetchData();
  }, [datos]); // Agregar dependencia a datos para que se ejecute nuevamente cuando cambian

  const handleEdit = (row: Proveedor) => {
    Swal.fire({
      title: "Modificar",
      text: "Desea modificar este producto?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, deseo modificar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const id = row.id.toString();
        const name = row.name.toString();
        const rif = row.rif.toString();
        const email = row.email.toString();
        const telefono = row.telefono.toString();
        const queryParams = new URLSearchParams();

        queryParams.append("id", id);
        queryParams.append("name", name);
        queryParams.append("rif", rif);
        queryParams.append("email", email);
        queryParams.append("telefono", telefono);

        const url = `/ProveedoresModificar?${queryParams.toString()}`;
        navigate(url);
      }
    });
  };
  const handleDelete = async (row: Proveedor) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminalo!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const success = await deleteData(Tables.proveedor, row.id);
        if (success) {
          Swal.fire({
            title: "Eliminado",
            text: "El proveedor ha sido eliminado.",
            icon: "success",
          });
        }
      }
    });
  };

  const columns = [
    {
      name: "Nombre",
      selector: (row: Proveedor) => row.name,
      sortable: true,
    },
    {
      name: "Correo",
      selector: (row: Proveedor) => row.email,
      sortable: true,
    },
    {
      name: "Rif",
      selector: (row: Proveedor) => row.rif,
      sortable: true,
    },
    {
      name: "Telefono",
      selector: (row: Proveedor) => row.telefono,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row: Proveedor) => (
        <div>
          <FontAwesomeIcon
            icon={faPencil}
            onClick={() => handleEdit(row)}
            className={styles.btn_edit}
          />

          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleDelete(row)}
            className={styles.btn_delete}
          />
        </div>
      ),
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredData = datos.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.rif.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
    );
  });
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#468FAF", // Color de fondo negro
        color: "white", // Texto en color blanco
        fontWeight: "bold", // Texto en negrita
      },
    },
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.searchContainer}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />

        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar..."
          className={styles.search_input}
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={10}
        customStyles={customStyles} // Aplicar los estilos personalizados
      />
    </div>
  );
}

export default TablaProveedor;
