
import './App.css'
import Preguntas from "./components/Preguntas";
import Informacion from "./components/Informacion";
import { useState } from 'react';

const mookData=[{id: 'Gandhi LenninHernández Fontes', nombre: 'Gandhi Lennin', apellido: 'Hernández Fontes', email: 'fontes201@gmail.com', telefono: '01155890515',  password:"yo",
  vpassword:"yo",}];

function App() {
 
  const [usuarios,setUsuarios]=useState(mookData)

 console.log(mookData);
  return (
    <>
     <header>
      <h1> Registro de Usuario</h1>
      <p>Por favor, ingrese los datos para registrarlo en nuestra web</p>
     </header>
     <Preguntas setUsuarios={setUsuarios}></Preguntas>
     
     <Informacion usuarios={usuarios} setUsuarios={setUsuarios}></Informacion>
    </>
  )
}

export default App
