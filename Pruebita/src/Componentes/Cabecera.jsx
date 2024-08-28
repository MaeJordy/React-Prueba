import React from "react";
import logo from '../images/logok.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import '../App.css'

function Cabecera (){
     // Función para agrandar el logo
     const enlargeLogo = (e) => {
        e.target.style.transform = 'scale(1.2)';
        e.target.style.transition = 'transform 0.3s ease-in-out';
    };

    // Función para restablecer el tamaño del logo
    const resetLogoSize = (e) => {
        e.target.style.transform = 'scale(1)';
    };

    // Función para aplicar efecto a las redes sociales
    const applySocialEffect = (e) => {
        e.target.style.transform = 'rotate(20deg)';
        e.target.style.transition = 'transform 0.3s ease-in-out';
    };

    // Función para restablecer la imagen de las redes sociales
    const resetSocialEffect = (e) => {
        e.target.style.transform = 'rotate(0deg)';
    };
    
    return(
        <>
        <header className="Cabeza">
            <section className="section">
                <div className="lg-h">
                    <img src={logo} alt="loguito" 
                     onMouseEnter={enlargeLogo}
                     onMouseLeave={resetLogoSize} />
                    <h1>MueblesFAST</h1>
                </div>
                <div className="redes">
                    <img className="fb" src={facebook} alt="fb" 
                    onMouseEnter={applySocialEffect}
                    onMouseLeave={resetSocialEffect}/>
                    <img className="ig" src={instagram} alt="ig"
                     onMouseEnter={applySocialEffect}
                     onMouseLeave={resetSocialEffect} />
                    <img className="yt" src={youtube} alt="yt" 
                    onMouseEnter={applySocialEffect}
                    onMouseLeave={resetSocialEffect}/>
                </div>
            </section>
        </header>
        </>
    )
}
export default Cabecera;