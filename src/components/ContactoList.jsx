import React, { useState } from 'react'
import { Contacto } from '../models/contacto.class'
import ContactoComponent from './Contacto'
import ContactoForm from './contactoForm'

const ContactoList = () => {

    const contacto1 = new Contacto("Adriana", "Paredes", 3186219938, true)
    const contacto2 = new Contacto("Goofy", "Paredes", 3186219938, true)
    const contacto3 = new Contacto("Emma", "Paredes", 3186219938, false)

    const [contactos, setContactos] = useState([contacto1, contacto2, contacto3])

    function changeContacto(contacto){
        console.log('Complete this Contacto: ', contacto)
        const index = contactos.indexOf(contacto);
        const tempContacs = [...contactos]
        tempContacs[index].status = !tempContacs[index].status;
        setContactos(tempContacs);
      }
    
    function deleteContacto(contacto){
        console.log('Complete this Contacto: ', contacto)
        const index = contactos.indexOf(contacto);
        const tempContacs = [...contactos]
        tempContacs.splice(index, 1);
        setContactos(tempContacs);
    }

    function addContacto(contacto){
        console.log('Complete this Contacto: ', contacto)
        const index = contactos.indexOf(contacto);
        const tempContacs = [...contactos]
        tempContacs.push(contacto)
        setContactos(tempContacs);
    }

  return (
    <div>
      <div className='task-title col-12'>
      <div className='card'>
        <div className='card-header p-3'>
          <h5>Tus Contactos: </h5>
        </div>
        <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
          <table>
            <thead>
            </thead>
            <tbody>
            { contactos.map((contacto, index) => {
              return (
                <ContactoComponent key={index} contacto={contacto} change={changeContacto} remove={deleteContacto}>
                </ContactoComponent>
              )
            }
            )}   
            </tbody>
          </table>
        </div>
        <ContactoForm add={addContacto}></ContactoForm>
      </div>
      </div>
      
    </div>
  )
}

export default ContactoList
