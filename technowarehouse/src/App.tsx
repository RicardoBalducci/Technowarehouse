import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact</h1>
        </Route>
      </Router>
    </>
  );
}

export default App;
/*
import { Tables } from "./types/core";
import { useState } from "react";
import { insertData } from "./services/supabase";
function App() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await insertData(Tables.product, values);

    if (!response) {
      alert("Error al guardar");
      return;
    }

    alert("Todo Ok");
  };
  return (
    <>
      <h1>Vite + React</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          type="text"
          placeholder="name"
          required
        />
        <input
          name="description"
          value={values.description}
          onChange={handleChange}
          type="text"
          placeholder="description"
          required
        />
        <input
          name="image"
          value={values.image}
          onChange={handleChange}
          type="text"
          required
          placeholder="image"
        />
        <button>Guardar</button>
      </form>
    </>
  );
}

export default App;
s
*/
