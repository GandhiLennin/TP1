import React from 'react'

export default function Preguntas({setUsuarios}) {
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const nombre=e.target.elements[0].value;
    const apellido=e.target.elements[1].value;
    const email=e.target.elements[2].value;
    const telefono=e.target.elements[3].value;
    const contrasegna=e.target.elements[4].value;
    const valContrasegna=e.target.elements[5].value;
    
    const nuevoUsuario={
      id: nombre+apellido,
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono:telefono,
      password:contrasegna,
      vpassword:valContrasegna,
    }
    //console.log(nuevoUsuario)
    setUsuarios((prevUsuarios)=>[...prevUsuarios, nuevoUsuario ]);
  };
  return (
    <form onSubmit={handleSubmit}>
    <label>Nombre: </label>
    <input type='text' name="nombre" required></input>
    <label>Apellido:</label>
    <input type='text' name="apellido" required></input>
    <label>Email: </label>
    <input type='email' name="email" required></input>
    <label>Telefono: </label>
    <input type='tel' name="telefono" required></input>
    <label>Constraseña: </label>
    <input type='password' name="password" required></input>
    <label>Confirmar Contraseña: </label>
    <input type='password' name="confirmarPassword" required></input>
    <input type='submit' value="Resgistrarse"></input>
  </form>
  )
}

