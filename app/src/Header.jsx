import React from "react";
import logoSpotify from '../assets/Logo.svg';
import Header from './'

const Header = () => {
    return <div className="Header">
        <img src={logoSpotify} alt="Logo do spotify" />
        <a href="/">
            <h1>Spotify</h1>
        </a>
    </div>

}

export default Header;