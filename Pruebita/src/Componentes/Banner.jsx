import React, { useState, useEffect } from "react";
import local from '../images/Local.jpg'
import emsamblado from '../images/Emsamblado.jpg'
import parchado from '../images/parchado.jpg'
import almacen from '../images/almacen.jpg'
import '../App.css'

function Banner() {
    // Array de imágenes del banner
    const images = [local,emsamblado,parchado,almacen];

    // Estado para la imagen actual
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Función para cambiar a la siguiente imagen
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // useEffect para cambiar la imagen automáticamente cada 3 segundos
    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000); // Cambia cada 3 segundos
        return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonte
    }, []);

    return (
        <>
            <section className="banner">
                <img src={images[currentImageIndex]} alt="banner" />
            </section>
        </>
    );
}
export default Banner;