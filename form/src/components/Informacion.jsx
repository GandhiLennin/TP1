import React from 'react'
import pic from "../assets/perfil.jpg"

export default function Informacion({usuarios,setUsuarios}) {
  return (
    
<>
    {usuarios.map((usuario)=>(
      <article key={usuario.id}>

     
      
            <img src={pic} alt="perfil" width={150}/>
            <h2>   Nombre: {usuario.nombre} {usuario.apellido}</h2>
            
            
      



      </article>
    )

    )}
</>
    


    
    
    
  )
}

