import React from "react";
import { artistArray } from "../assets/database/artists";
import playButton from "../assets/Play.svg"

const Artista = () => {

  return (

    artistArray.map((artista) => (
      <div className="Artista" key={artista.id}>
        <img className="Artista_img" src={artista.image} alt="imagem do artista" />
        <img className="Artista_button" src={playButton} alt="" />
        <p className="Artista_text">
          {artista.name}
        </p>
      </div>
    ))



    //     <div className="Artista">
    //     <img src={artista.image} alt="imagem do artista" />
    //     <h3>{artista.name}</h3>
    //     <a href="/">Artista</a>
    // </div>

  )

}

export default Artista;