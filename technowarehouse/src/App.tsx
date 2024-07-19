import Login from "./login";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;