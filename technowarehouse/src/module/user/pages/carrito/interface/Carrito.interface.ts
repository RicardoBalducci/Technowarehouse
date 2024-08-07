export interface Producto {
  id: number;
  name: string;
  precio: number;
  stock: number;
  image: string;
}

export interface CartItem {
  producto: Producto;
  cantidad: number;
}
