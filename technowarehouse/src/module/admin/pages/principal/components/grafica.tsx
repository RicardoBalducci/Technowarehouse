import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Grafica() {
  const data = [
    { name: "Julio", avances: 15 },
    { name: "Agosto", avances: 10 },
    { name: "Septiembre", avances: 15 },
    { name: "Octubre", avances: 25 },
    { name: "Noviembre", avances: 35 },
    { name: "Diciembre", avances: 40 },
    { name: "Enero", avances: 53 },
    { name: "Febrero", avances: 54 },
    { name: "Marzo", avances: 53 },
    { name: "Abril", avances: 45 },
    { name: "Mayo", avances: 56 },
    { name: "Junio", avances: 57 },
    { name: "Julio", avances: 56 },
  ];

  return (
    <BarChart width={600} height={400} max-width={600} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="avances" fill="#8884d8" barSize={30} />
    </BarChart>
  );
}

export default Grafica;
