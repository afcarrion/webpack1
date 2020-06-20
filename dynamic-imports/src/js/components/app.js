import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

import "../../less/less.less";
import "../../sass/sass.scss";
import "../../stylus/stylus.styl";

function App() {
  const [loaderList, setLoaderList] = useState([]);

  async function handleClick() {
    console.log("entro");
    setLoaderList(data.loaders);
    const { alerta } = await import("./alert.js");
    alerta("omg, este modulo ha cargado dinamicamente");
  }
  return (
    <div>
      <section>
        <p className="sass">Esto es sass</p>
        <p className="less">Esto es less</p>
        <p className="stylus">Esto es Stylus</p>
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
