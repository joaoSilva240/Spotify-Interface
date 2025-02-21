import React from "react";
import { songsArray } from "../assets/database/songs";
import playButton from "../assets/Play.svg"

const Musica = () => {

  return (

    songsArray.map((Musica) => (
      <div className="Musica" key={Musica.id}>
        <img className="Musica_button" src={playButton} alt="" />
        <img className="Musica_img" src={Musica.image} alt="imagem do Musica" />
        <a href="/" className="Musica_texts" >
          <p className="Musica_text">{Musica.name}</p>
          <p>{Musica.artist}</p>
        </a>
      </div>
    ))

  )

}

export default Musica;