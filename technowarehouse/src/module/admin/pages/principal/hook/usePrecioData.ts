import { useState, useEffect } from "react";
import { supabase } from "../../../../../services/supabase";
import { Tables } from "../../../../../types/core";
import { Product } from "../../../../../interface/Product.interface";

function usePrecioData() {
  const [precioData, setPrecioData] = useState<Product[]>([]);
  const [totalPrecio, setTotalPrecio] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from(Tables.product)
        .select("precio");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setPrecioData(data as Product[]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const sumPrecioValues = () => {
      let sum = 0;
      precioData.forEach((item) => {
        sum += item.precio;
      });
      setTotalPrecio(sum);
    };

    sumPrecioValues();
  }, [precioData]);

  return totalPrecio;
}

export default usePrecioData;
