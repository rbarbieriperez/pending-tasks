import React, { useState, useEffect } from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import './UserModal.css';
import { consumeAPI } from "../utilities/consumeAPI";
import { createRef, useCallback, useRef } from "react/cjs/react.production.min";


export const UserModal = (props, {sendUsername}) => {
    const [correo,updateCorreo ] = useState()     
    const inputRef = createRef();

    const CloseModal = () => {
        props.HandleShowModal();
    }


    const AccessFlow = (event) => {

        event.preventDefault();
        consumeAPI(`https://62423aacb6734894c14e7f14.mockapi.io/users?correo=${correo}`)
        .then((data) => 
        {
            if(Object.keys(data).length !== 0){
                CloseModal();
                props.sendUsername(correo, data);
            } else {
                alert("Usuario no registrado :(")
                event.preventDefault();
            }
            
        })
        
        
        
    }
    
    
    
    
    
    return(
        <React.Fragment>
            <section id="usermodalsection-id">
                <form id="currentuser-id" onSubmit={AccessFlow}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username-id" required="required" minLength="8" maxLength="50"  ref = {inputRef} value="rbarbieriperez@gmail.com"/> <br/>
                    <button id="accessbutton-id" onClick={() => {updateCorreo(inputRef.current.value);}}>Access</button>
                </form>
                <form action="" id="newuser-id">
                    <label htmlFor="newusername">New Username:</label>
                    <input type="text" name="newusername" id="newusername-id" required="required" minLength="8" maxLength="20"/> <br/>
                    <button id="registerbutton-id">Register</button>
                </form>
            </section>
        </React.Fragment>
    )
}


export default UserModal;