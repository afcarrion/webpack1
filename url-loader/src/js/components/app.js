import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

function App() {
  const [loaderList, setLoaderList] = useState([]);

  function handleClick() {
    console.log("entro");
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <section>
        <h1>Que linda aplicacion hecha en React.js</h1>
        <img src={logo} alt="" width={40} />
        <video src={video} width={400} controls poster={logo}></video>
        <ul>
          {loaderList.map((item) => (
            <Loader {...item} key={item.id} />
          ))}
        </ul>
        <button onClick={handleClick}>Mostrar lo aprendido</button>
      </section>
    </div>
  );
}

export default App;
