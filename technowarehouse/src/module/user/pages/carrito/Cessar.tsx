import { useState, useEffect } from "react";
import "./styles/car.css";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  cartItemId: number;
  quantity: number;
}

function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch("src/product.json")
      .then((response) => response.json())
      .then((data: { products: Product[] }) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const cartItem: CartItem = {
        ...product,
        cartItemId: Math.random(),
        quantity: 1,
      };
      setCartItems([...cartItems, cartItem]);
    }
  };

  const removeFromCart = (cartItemId: number) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.cartItemId !== cartItemId
    );
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (cartItemId: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.cartItemId === cartItemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (cartItemId: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.cartItemId === cartItemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  /* borra la lista para agregar articulos la use para tener base de conque se trabaja
 hay un .json llamado product que tiene los datos de los articulos que uso
 */
  return (
    <div>
      <div className="Para agregar la lista para agregar articulos">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mx-auto ">
            <ul>
              {cartItems.map((item, index) => (
                <li className="product p-2 m-2 " key={item.cartItemId}>
                  <div className="dr">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>

                  <div className="md">
                    <p>{item.name}</p>
                    <p>${item.price} </p>
                  </div>

                  <div className="iz">
                    <button
                      className="btn-p  m-1"
                      onClick={() => decreaseQuantity(item.cartItemId)}
                    >
                      -
                    </button>
                    <div>
                      <h5 className="m-1 p-2">{item.quantity}</h5>
                    </div>

                    <button
                      className="btn-p  text-light m-1"
                      onClick={() => increaseQuantity(item.cartItemId)}
                    >
                      +
                    </button>
                    <button
                      className="btn-eliminar   m-1"
                      onClick={() => removeFromCart(item.cartItemId)}
                    ></button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className=" sticky-top col-md-6  container d-flex justify-content-center align-items-center">
            <div className="total-car border rounded p-5">
              <img src="../public/carrito.png" alt="" width="100" />
              <h5>Resumen de su compra</h5>
              <p>
                Total a pagar: <h2>${getTotalPrice()}</h2>
              </p>
              <button className="btn-pagar">Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProductProps {
  product: Product;
  addToCart: (product: Product) => void;
}

function Product({ product, addToCart }: ProductProps) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100px", height: "100px" }}
      />
      <p>
        {product.name} - ${product.price}
      </p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ShoppingCart;
