import { useState, useEffect } from "react";
import { supabase } from "../../../../../services/supabase";
import { Tables } from "../../../../../types/core";
import { Product } from "../../../../../interface/Product.interface";

function useStockData() {
  const [stockData, setStockData] = useState<Product[]>([]);
  const [totalStock, setTotalStock] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from(Tables.product)
        .select("stock");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setStockData(data as Product[]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const sumStockQuantities = () => {
      let sum = 0;
      stockData.forEach((item) => {
        sum += item.stock;
      });
      setTotalStock(sum);
    };

    sumStockQuantities();
  }, [stockData]);

  return totalStock;
}

export default useStockData;
