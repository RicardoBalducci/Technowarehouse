import { useState, useEffect } from "react";
import { supabase } from "../../../../../services/supabase";
import { Tables } from "../../../../../types/core";
import { UserInterface } from "../../../../../interface/user.interface";

function useUserData() {
  const [userData, setUserData] = useState<UserInterface[]>([]);
  const [totalUsers, setTotalUsers] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from(Tables.user).select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setUserData(data as UserInterface[]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const calculateTotalUsers = () => {
      const count = userData.length;
      setTotalUsers(count);
    };

    calculateTotalUsers();
  }, [userData]);

  return totalUsers;
}

export default useUserData;
