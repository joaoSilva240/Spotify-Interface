import React from "react";
import { artistArray } from "../assets/database/artists";
import playButton from "../assets/Play.svg"

const Artista = () => {

  return (

    artistArray.map((artista) => (
      <div className="Artista" key={artista.id}>
        <div className="Artista_imagens">
          <img className="Artista_img" src={artista.image} alt="imagem do artista" />
          <img className="Artista_button" src={playButton} alt="" />
        </div>
        <a href="/" className="Artista_texts" >
          <p className="Artista_text">{artista.name}</p>
          <p>artista</p>
        </a>
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