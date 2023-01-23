import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class';

const ContactoComponent = ({contacto, change, remove}) => {

    console.log(contacto);

    function contactoChangeStatus(){
        if(contacto.status){
            return(<i class="bi bi-circle-fill" style={{color: 'green', fontWeight: 'bold'}} onClick={()=>change(contacto) }></i>)
        }else return(<i class="bi bi-circle-fill" style={{color: 'red', fontWeight: 'bold'}} onClick={()=>change(contacto) }></i>)
    }
  return (
    <div>
      <tr className='fw-normal'>
        <td>
            <span className='ms-2'> { contacto.name}</span>
        </td>
        <td className='align-middle'>
            <span> {  contacto.lastName}</span>
        </td>
        <td className='align-middle'>
            <span> {  contacto.telefono}</span>
        </td>
        <td className='align-middle'>
            {contactoChangeStatus()}
            <i className='bi-trash onClick={change(contacto)}' style={{color: 'tomato'}} onClick={()=>remove(contacto)}></i>
        </td>
    </tr>
    </div>
  )
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    change: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired 
};

export default ContactoComponent
