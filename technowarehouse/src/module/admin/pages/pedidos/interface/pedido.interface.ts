export interface Pedido {
  id: number;
  cedula_user: string;
  name_user: string;
  estado: string;
  total: number;
  cantidad: number;
}

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
}
