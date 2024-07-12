//importamos la funcion del cliente
import { createClient } from "@supabase/supabase-js";
import { Tables } from "../types/core";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY
);

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

//Funcion que nos permite insertar datos
export async function insertData(
  table: Tables,
  data: unknown
): Promise<boolean> {
  const { error } = await supabase.from(table).insert(data);
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
/*
// Update data in a table
export async function DeleteData(
  table: Tables,
  data: unknown
): Promise<boolean> {
  const { error } = await supabase.from(table).update(data).eq("id", 1);
  return !error;
}*/
