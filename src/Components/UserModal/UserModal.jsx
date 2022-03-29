import React, { useState, useEffect } from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import './UserModal.css';
import { consumeAPI } from "../utilities/consumeAPI";
import { createRef, useCallback, useRef } from "react/cjs/react.production.min";


export const UserModal = (props, {sendUsername}) => {
    const [correo,updateCorreo ] = useState()     
    const [JSONgetted, updateJSON] = useState({});
    const inputRef = createRef();

    const CloseModal = () => {
        props.HandleShowModal();
    }

    /*useEffect(() => {
        alert("correo tiene" +correo)
        consumeAPI(`https://62423aacb6734894c14e7f14.mockapi.io/users?correo=${correo}`)
        .then(data => {
            updateJSON(data);
        })
    },[correo]);*/



    const CheckIfUserExists = () => {
        consumeAPI(`https://62423aacb6734894c14e7f14.mockapi.io/users?correo=${correo}`)
        .then((data) => updateJSON(data))
    }
    
    const AccessFlow = (event) => {

        
        if(inputRef.current.value !== ""){
            updateCorreo(inputRef.current.value);
        }
        CheckIfUserExists();
        
        alert(JSON.stringify(JSONgetted))

        if(Object.keys(JSONgetted).length !== 0){
            CloseModal();
            props.sendUsername(inputRef.current.value, JSONgetted);
        } else {
            alert("Usuario no registrado :(")
            event.preventDefault();
        }
        
        
    }
    
    
    
    
    
    return(
        <React.Fragment>
            <section id="usermodalsection-id">
                <form id="currentuser-id" onSubmit={AccessFlow}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username-id" required="required" minLength="8" maxLength="50"  ref = {inputRef} value="rbarbieriperez@gmail.com"/> <br/>
                    <button id="accessbutton-id">Access</button>
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