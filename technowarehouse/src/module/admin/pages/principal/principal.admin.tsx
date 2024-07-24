import React from "react";
import Menu from "../components/menu";
import useStockData from "./hook/useStockData";
import useUserData from "./hook/useUserData";
import styles from "./principal.admin.module.css";
import useProveedorData from "./hook/useProveedorData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBoxesStacked,
  faTruckField,
} from "@fortawesome/free-solid-svg-icons";
function PrincipalAdmin() {
  const totalStock = useStockData();
  const totalProveedor = useProveedorData();
  const totalUsers = useUserData();

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <h1>Panel de Control</h1>
        <FontAwesomeIcon icon={faBoxesStacked} />
        <p>Total Stock: {totalStock}</p>
        <FontAwesomeIcon icon={faUsers} />
        <p>Total Users: {totalUsers}</p>
        <FontAwesomeIcon icon={faTruckField} />
        <p>Total Proveedor: {totalProveedor}</p>
      </div>
    </div>
  );
}

export default PrincipalAdmin;
