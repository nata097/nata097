import React from 'react';//se debe poner siempre

//arowFuntion, imprimir nombre instructor nombre horario 
const Curso = ({name,teacher,schedule})=>(
    <>
 <div>
    <label>Curso:</label>{name}<span></span>
    <label>Instructor:</label>{teacher}<span></span>
    <label>Horario:</label>{schedule}<span></span>
 </div>
 <h2></h2>
    </>
)
export default Curso;

