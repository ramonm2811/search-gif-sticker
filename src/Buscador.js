import React, { useState } from "react";

const Buscador = ({ setTema, setTipo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleGif = () => {
    setTema(inputValue);
    setTipo("gifs");
  };
  const handleSticker = () => {
    setTema(inputValue);
    setTipo("stickers");
  };
  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <div className="container d-flex justify-content-center my-3">
      <div>
        <input
          type="text"
          className="form-control input"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleInput}
        />
        <div className="d-flex justify-content-center my-1">
          <button className="btn btn-danger btn-lg me-2" onClick={handleGif}>
            GIFS
          </button>
          <button
            className="btn btn-danger btn-lg me-2"
            onClick={handleSticker}
          >
            STICKERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
