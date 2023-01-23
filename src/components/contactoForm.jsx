import React, {useRef} from "react";
import PropTypes from 'prop-types';
import { Contacto } from "../models/contacto.class";

const ContactoForm = ({add}) => {

    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const telefonoRef = useRef()

    function addContacto(e){
        e.preventDefault();
        const newCont = new Contacto(
            nameRef.current.value,
            lastNameRef.current.value,
            telefonoRef.current.value,
            true
        );
        add(newCont)
    }

    return(
        <form onSubmit={addContacto}>
            <div className="form-putline flex-fill">
                <input ref={nameRef} id='inputName' type='text'className="form-control form-control-lg" required autoFocus placeholder="Nombre"></input>
                <input ref={lastNameRef} id='inputLastName' type='text'className="form-control form-control-lg" required autoFocus placeholder="Apellido"></input>
                <input ref={telefonoRef} id='inputTelefono' type='number'className="form-control form-control-lg" required autoFocus placeholder="0000000000"></input>
            </div>
            <button type='submit' className="btn btn-success btn-lg ms-2">Add</button>
        </form>
    )

}

ContactoForm.protoTypes = {
    add: PropTypes.func.isRequired
}

export default ContactoForm;