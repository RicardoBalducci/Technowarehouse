import { createClient } from "@supabase/supabase-js";
import { Tables } from "../types/core";
//importamos la funcion del cliente

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY
);

//ver datos
export async function viewData(table: Tables) {
  const { data, error } = await supabase.from(table).select();
  return { data, error };
}

//Insertar datos
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
  data: unknown
): Promise<boolean> {
  const { error } = await supabase.from(table).update(data).eq("id", 1);
  return !error;
}
