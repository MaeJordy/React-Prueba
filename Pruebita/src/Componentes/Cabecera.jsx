import React from "react";
import logo from '../images/logok.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import '../App.css'

function Cabecera (){
    
    return(
        <>
        <header className="Cabeza">
            <section className="section">
                <div className="lg-h">
                    <img src={logo} alt="loguito" />
                    <h1>MueblesFAST</h1>
                </div>
                <div className="redes">
                    <img className="fb" src={facebook} alt="fb" />
                    <img className="ig" src={instagram} alt="ig" />
                    <img className="yt" src={youtube} alt="yt" />
                </div>
            </section>
        </header>
        </>
    )
}
export default Cabecera;