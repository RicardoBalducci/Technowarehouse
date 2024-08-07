import Menu from "../components/menu";
import useStockData from "./hook/useStockData";
import useUserData from "./hook/useUserData";
import styles from "./principal.admin.module.css";
import useProveedorData from "./hook/useProveedorData";
import usePrecioData from "./hook/usePrecioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faBoxesStacked,
  faTruckField,
  faCommentsDollar,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Grafica from "./components/grafica";
import useTotalCanceledOrders from "./hook/useGananciaData";

function PrincipalAdmin() {
  const totalStock = useStockData();
  const totalProveedor = useProveedorData();
  const totalPrecio = usePrecioData();
  const totalUsers = useUserData();
  const Ganancia = useTotalCanceledOrders();
  const TasaBs = 36.559;
  // Calcular el precio promedio

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>

      <div className={styles.content}>
        <h1 className={styles.titulo}>Panel de control</h1>
        <div className={styles.ordenar}>
          <div className={`${styles.cuadro} ${styles.one}`}>
            <div className={`${styles.cuadro} ${styles.totalProductos}`}>
              <FontAwesomeIcon icon={faBoxesStacked} />
              <p>Total productos</p>
              <p className={styles.Numero}>{totalStock}</p>
            </div>
          </div>
          <div className={`${styles.cuadro} ${styles.two}`}>
            {" "}
            <div className={styles.cuadro}>
              <FontAwesomeIcon icon={faUserGroup} />
              <p>Total de usuarios</p>
              <p>{totalUsers}</p>
            </div>
          </div>
          <div className={`${styles.cuadro} ${styles.seven}`}>
            {" "}
            <FontAwesomeIcon icon={faTruckField} />
            <p>Proveedor</p>
            <p>{totalProveedor}</p>
          </div>
          <div className={`${styles.cuadro} ${styles.for}`}>
            {" "}
            <FontAwesomeIcon icon={faDollarSign} />
            <p>Inversion: </p>
            <p>{totalPrecio} $</p>
          </div>
          <div className={`${styles.cuadro} ${styles.five}`}>
            <FontAwesomeIcon icon={faDollarSign} />
            <p>Ingresos de Venta</p>
            <p>{Ganancia} $</p>
          </div>
          <div className={`${styles.cuadro} ${styles.six}`}>
            <div className={styles.cuadro}>
              <FontAwesomeIcon icon={faCommentsDollar} />
              <p>Tasa del Dia</p>
              <p>{TasaBs} Bs</p>
            </div>
          </div>
          <div className={`${styles.cuadro} ${styles.tres}`}>
            {" "}
            <p>Grafica esperadas en 2024-2025</p>
            <Grafica />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PrincipalAdmin;

/*          


*/
