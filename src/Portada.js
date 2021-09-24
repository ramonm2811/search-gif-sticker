import React, { useState } from "react";
import Buscador from "./Buscador";
import GridPortada from "./GridPortada";

const Portada = () => {
  const [tema, setTema] = useState("");
  const [tipo, setTipo] = useState("gifs");
  return (
    <>
      <Buscador setTema={setTema} setTipo={setTipo} />
      <GridPortada tema={tema} tipo={tipo} />
    </>
  );
};

export default Portada;
