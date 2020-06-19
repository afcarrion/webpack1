import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";

function App() {
  const [loaderList, setLoaderList] = useState([]);

  function handleClick() {
    console.log("entro");
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <h1>Que linda aplicacion hecha en React.js</h1>
      <ul>
        {loaderList.map((item) => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido</button>
    </div>
  );
}

export default App;
