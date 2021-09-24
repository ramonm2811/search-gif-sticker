import React, { useState, useEffect } from "react";

const GridPortada = ({ tema, tipo }) => {
  /* Variable de estado para almacenar la informacion de mi API */
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {}, []);
  /* Funcion para hacer la petición a la API */
  const handleAPI = async () => {
    const url = `https://api.giphy.com/v1/${tipo}/search?q=${tema}&api_key=CY1eHEkPcygchISihJzbrCUxyPYt8ffV`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const aux = data.map((imgURL) => imgURL.images.original.url);
    setImagenes(aux);
  };
  handleAPI();
  return (
    <div className="container-fluid vh-100">
      <div className="row">
        {imagenes.map((item) => (
          <div className="col-3 overflow-hidden" key={item}>
            <img src={item} key={item} className="imgPortada" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridPortada;
