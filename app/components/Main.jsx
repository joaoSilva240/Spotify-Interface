import React from "react";
import Artista from "./Artista";
import Musica from "./Musicas";

const Main = () => {

    return (
        <div className="Main">
            <div className="Item-list">
                <h2 className="Item-list__text">
                    Artistas populares
                </h2>
                <a className="Item-list__link" href="/">Mostrar tudo</a>
            </div>
            <div className="Artistas">
                <Artista />
            </div>
            <div className="Item-list">
                <h2 className="Item-list__text">
                    Musicas Populares
                </h2>
                <a className="Item-list__link" href="/">Mostrar tudo</a>
            </div>
            <div className="Musicas">
                <Musica/>
            </div>
        </div>
    )
}

export default Main