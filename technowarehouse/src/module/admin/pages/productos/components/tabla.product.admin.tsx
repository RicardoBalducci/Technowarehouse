import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { viewData } from "../../../../../services/supabase";
import { Product } from "../../../../../interface/Product.interface";
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

function TablaProductos() {
  const [datos, setDatos] = useState<Product[]>([]);
  const [search, setSearch] = useState(""); // Estado para almacenar el valor de búsqueda

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await viewData(Tables.product);
      if (error) {
        console.error(error);
      } else {
        setDatos(data || []);
      }
    }

    fetchData();
  }, [datos]); // Agregar dependencia a datos para que se ejecute nuevamente cuando cambian

  const handleEdit = (row: Product) => {
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
        const precio = row.precio.toString();
        const descripcion = row.description.toString();
        const stock = row.stock.toString();
        const proveedor = row.proveedor.toString();
        const image = row.image.toString();
        const queryParams = new URLSearchParams();
        queryParams.append("id", id);
        queryParams.append("name", name);
        queryParams.append("precio", precio);
        queryParams.append("descripcion", descripcion);
        queryParams.append("stock", stock);
        queryParams.append("proveedor", proveedor);
        queryParams.append("image", image);

        const url = `/ProductsModificar?${queryParams.toString()}`;
        navigate(url);
      }
    });
  };
  const handleDelete = async (row: Product) => {
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
        const success = await deleteData(Tables.product, row.id);
        if (success) {
          Swal.fire({
            title: "Eliminado",
            text: "El producto ha sido eliminado.",
            icon: "success",
          });
        }
      }
    });
  };
  const columns = [
    {
      name: "Nombre",
      selector: (row: Product) => row.name,
      sortable: true,
    },
    {
      name: "Descripción",
      selector: (row: Product) => row.description,
      sortable: true,
    },
    /*{
      name: "Imagen",
      cell: (row: Product) => (
        <>
          {row.images.map((image, index) => (
            <img
              key={index}
              src={`https://dkmcywdlzsslpgnvfxzy.supabase.co/storage/v1/object/public/Technowarehouse/public/${image}`}
              className={`${styles.img} ${styles.img_small}`}
              alt={`Imagen ${index}`}
            />
          ))}
        </>
      ),
      sortable: true,
    },*/
    {
      name: "Proveedor",
      selector: (row: Product) => row.proveedor,
      sortable: true,
    },
    {
      name: "Precio ($)",
      selector: (row: Product) => row.precio,
      sortable: true,
    },
    {
      name: "Cantidad",
      selector: (row: Product) => row.stock,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row: Product) => (
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
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.proveedor.toLowerCase().includes(search.toLowerCase())
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
        paginationPerPage={5}
        customStyles={customStyles} // Aplicar los estilos personalizados
      />
    </div>
  );
}

export default TablaProductos;
