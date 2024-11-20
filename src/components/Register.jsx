import React from 'react';
import '../styles/Register.css';

const Register = () => {
  return (
    <div className="form-container">
      <h2>Registrar</h2>
      <form>
        <label>Nombre</label>
        <input type="text" placeholder="Ingrese su Nombre" />
        <label>Email</label>
        <input type="email" placeholder="Ingrese su Email" />
        <label>Contraseña</label>
        <input type="password" placeholder="Ingrese su Contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
