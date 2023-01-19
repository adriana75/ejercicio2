import React, { Component, useState, useEffect } from 'react'
//import ‘../../styles/clock.scss’;

const Clock = () => {
   const initialState = {
      fecha: new Date(),
      edad: 0,
      nombre: 'Martín',
      apellidos: 'San José'
   }

   const [usuario, setUsuario] = useState(initialState)

   useEffect(() => {
   const intervalo = setInterval(()=>{
      updateUser(); 
   }, 1000);

   return () => {
      clearInterval(intervalo);
   }
   })

   const updateUser = () => {
      return setUsuario({
         fecha: usuario.fecha,
         edad: usuario.edad + 1,
         nombre: usuario.nombre,
         apellidos: usuario.apellidos
      })
   }

   return (
      <div>
         <h2>Hora actual: {usuario.fecha.toLocaleTimeString()}</h2>
         <h3>{usuario.nombre} {usuario.apellidos}</h3>
         <h1>Edad: {usuario.edad}</h1>
      </div>
   )
}
export default Clock;