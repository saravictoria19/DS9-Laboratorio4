import { useState } from "react";
import axios from "axios";

/**
 * Componente de formulario para enviar al backend.
 */
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        age: "",
        phone: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/form",formData);
            console.log('Form submitted: ', response.data); //Muestra la respuesta del servidor en la consola.
            setMessage(response.data.message);  //Actualiza el estado del mensaje con la respuesta deñ servidor.
        } catch (error) {
            console.error("Error al enviar el formulario: ", error); //Muestra un mensaje de error si ocurre problema.
        }
    };

    // ESTRUCTURA DEL FORMULARIO
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nombre: 
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Apellido: 
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Correo electrónico: 
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Edad:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Teléfono:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
            </div>
            <button type="submit">Enviar</button>
            {console.log(message)}
            {message && <p>{message}</p>} {/*Muestra el mensaje del servidor */}
        </form>
    );
};
export default Form;