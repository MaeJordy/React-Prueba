import React from "react";
import '../App.css'

function Formulario(){
    return(
        <>
        <section className="centro">
            <form className="formulario">
                <div className="fl-name">
                    <div>
                        <h3>First Name</h3>
                        <input type="text" placeholder="  First Name" />
                    </div>
                    <div>
                        <h3>Last Name</h3>
                        <input type="text" placeholder= "  Last Name" />
                    </div>
                </div>
                <div className="email-num">
                    <div>
                        <h3>Email Address</h3>
                        <input type="text" placeholder="  Email Address" />
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <input type="text" placeholder="  Phone Number" />
                    </div>
                </div>
            </form>
            <div className="boton">
                 <button>Submit</button>
            </div>
        </section>
        </>
    )
}
export default Formulario;