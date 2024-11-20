import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Ingrese su Email" />
        <label>Contraseña</label>
        <input type="password" placeholder="Ingrese su Contraseña" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
