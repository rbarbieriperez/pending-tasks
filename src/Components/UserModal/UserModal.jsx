import React, { useState } from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import './UserModal.css';

export const UserModal = () => {
    const [username,updateusername ] = useState("")     
    

    const getUserJSON = () => {
        return fetch("https://api.npoint.io/06ad77bde85ea10608b5")
        .then((response) => response.json())
        .then(data => data)
       
    }

    const AccessFlow = () => {
        let myJSON = {};
        getUserJSON().then((data) => {
            myJSON = data;
        });
        alert(myJSON)
    }
    
    
    
    
    
    return(
        <React.Fragment>
            <section id="usermodalsection-id">
                <form action="" id="currentuser-id" onSubmit={() => {AccessFlow()}}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username-id" required="required" minLength="8" maxLength="20" onChange={(event) => updateusername(event.target.value)}/> <br/>
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