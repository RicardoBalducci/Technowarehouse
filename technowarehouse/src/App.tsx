import Registrar from "./registrar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Registrar />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;