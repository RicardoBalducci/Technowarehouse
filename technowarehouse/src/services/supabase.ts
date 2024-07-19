//importamos la funcion del cliente
import { createClient } from "@supabase/supabase-js";
import { Tables } from "../types/core";
import Swal from "sweetalert2";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY
);

export async function login(params: { email: string; password: string }) {
  try {
    // Call the Supabase login function
    const { error } = await supabase.auth.signInWithPassword({
      email: params.email,
      password: params.password,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifique email o contraseña",
      });
      return null;
    }

    // Get the user information
    const user = await supabase.auth.getUser();

    return user;
  } catch (error) {
    // Handle any other errors
    console.error("An error occurred:", error);
    return null;
  }
}

export async function uploadImage(table: Tables, image: File): Promise<string> {
  const { data, error } = await supabase.storage
    .from(table)
    .upload(`images/${image.name}`, image, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw error;
  }

  return data.path; // Return the path property instead of Key
}
//funcion que nos permite ver los datos
export async function viewData(table: Tables) {
  const { data, error } = await supabase.from(table).select();
  return { data, error };
}

export async function viewDataLogin(
  table: Tables,
  email: string,
  password: string
) {
  try {
    // Realizar una consulta a la tabla para verificar si existe una coincidencia de email y contraseña
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    if (error) {
      throw new Error("An error occurred while querying the table");
    }

    // Si se encuentra una coincidencia, devolver los datos
    if (data) {
      return data;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}

//Funcion que nos permite insertar datos
export async function insertData(
  table: Tables,
  data: unknown
): Promise<boolean> {
  const { error } = await supabase.from(table).insert(data);
  console.log(error);
  return !error;
}

// Update data in a table
export async function updateData(
  table: Tables,
  data: Record<string, unknown>,
  id: string
): Promise<boolean> {
  const { error } = await supabase.from(table).update(data).eq("id", id);
  return !error;
}

export async function deleteData(table: Tables, id: number): Promise<boolean> {
  const { error } = await supabase.from(table).delete().eq("id", id);
  return !error;
}
