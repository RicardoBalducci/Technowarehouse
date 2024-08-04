/* eslint-disable @typescript-eslint/no-unused-vars */
import Carrito from "./carrito-compras";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(){
  return(
    <BrowserRouter>
    <Routes>
    
   
 
      <Route path="/" element={<Carrito />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;