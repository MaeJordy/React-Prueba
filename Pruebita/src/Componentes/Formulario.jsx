import React, { useState } from "react";
import '../App.css';

function Formulario() {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Función de validación
    const validateForm = () => {
        const { firstName, lastName, email, phoneNumber } = formData;

        // Validar nombres y apellidos (solo letras)
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
            alert("El Nombre y Apellido solo deben contener letras.");
            return false;
        }

        // Validar correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, introduce una dirección de correo electrónico válida.");
            return false;
        }

        // Validar número de teléfono (9 dígitos)
        const phonePattern = /^\d{9}$/;
        if (!phonePattern.test(phoneNumber)) {
            alert("El número de teléfono debe ser un número de 9 dígitos.");
            return false;
        }

        return true;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert(`Form submitted successfully:\n
                First Name: ${formData.firstName}\n
                Last Name: ${formData.lastName}\n
                Email: ${formData.email}\n
                Phone Number: ${formData.phoneNumber}`);
        }
    };

    return (
        <>
            <section className="centro">
                <form className="formulario" onSubmit={handleSubmit}>
                    <div className="fl-name">
                        <div>
                            <h3>First Name</h3>
                            <input type="text" name="firstName" placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <h3>Last Name</h3>
                            <input type="text"name="lastName" placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="email-num">
                        <div>
                            <h3>Email Address</h3>
                            <input type="text" name="email" placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <h3>Phone Number</h3>
                            <input type="text"  name="phoneNumber"  placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="boton">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Formulario;