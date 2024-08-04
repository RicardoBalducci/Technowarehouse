export interface Producto {
  name: string;
  precio: number;
}

export interface CartItem {
  producto: Producto;
  cantidad: number;
}
