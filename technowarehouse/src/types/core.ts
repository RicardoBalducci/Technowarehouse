//Indicamos el nombre de las tablas y las podemos exportas
export enum Tables {
  product = "product",
  user = "user",
  proveedor = "proveedor",
  technowarehouse = "Technowarehouse",
  pedido = "pedido",
  carrito = "carrito",
}

export enum Product {
  id = "id",
  name = "name",
  description = "description",
  image = "image",
  proveedor = "proveedor",
  price = "precio",
  stock = "stock",
}

/*
con importar Tables y llamarla 
Tables.product podremos obtener el nombre preciso de la tabla en cuestion sin preocuparse
por si esta bion o no escrito
*/
