import { useState } from 'react';
import Respuesta from './Alert';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [passA, setPassA] = useState('');
    const [passB, setPassB] = useState('');
    const [error, setError] = useState('')
    const validarDatos = (e) => {
        e.preventDefault();
        if (nombre === '' || passA === '' || email === '' || passB === '') {
            setError("Debes llenar todos los campos");
            return;
        }
        if (passA !== passB) {
            setError('Las contraseñas no coinciden');
            return;
        }
        setError('');
        alert('Te has registrado con éxito')
    };
    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input
                        type="text"
                        name="passA"
                        className="form-control"
                        onChange={(e) => setPassA(e.target.value)}
                        value={passA}
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar contraseña:</label>
                    <input
                        type="text"
                        name="passB"
                        className="form-control"
                        onChange={(e) => setPassB(e.target.value)}
                        value={passB}
                    />
                </div>
                <br />
                <Respuesta error={error}/>
                <button type="submit" className="btn btn-primary" id='btnenviar'>
                    Registrarse
                </button>
            </form>
            <hr />
        </>
    );
};
export default Formulario;