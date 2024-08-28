import React, { useState, useEffect } from "react";
import '../App.css';

function Pie() {

    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000); // Actualiza cada segundo

        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
    }, []);
    const formattedDate = dateTime.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const formattedTime = dateTime.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return (
        <>
            <footer className="pie">
                <div className="subdi">
                    <h2>MueblesFAST</h2>
                </div>
                <div className="fecha-hora">
                    <p>Fecha : {formattedDate}  Hora : {formattedTime}</p>
                </div>
            </footer>
        </>
    );
}
export default Pie;
