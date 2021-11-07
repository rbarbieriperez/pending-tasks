import React, { useState, useEffect } from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import './UserModal.css';

export const UserModal = (props, {sendUsername}) => {
    const [username,updateusername ] = useState("")     
    const [JSONgetted, updateJSON] = useState({});


      useEffect(() => { //get Users JSON
        const fetchData = async () => {
          const res = await fetch(
            "https://api.npoint.io/06ad77bde85ea10608b5",
          );
          const json = await res.json();
          updateJSON(json);
        };
        fetchData();
      },[]);


    const CloseModal = () => {
        props.HandleShowModal();
    }

    const AccessFlow = () => {
        //Manage all the Access Flow != Manage Register Flow
        let usersMatch = 0;
        for(let values of Object.values(JSONgetted)){
            if(values.username === username){
                CloseModal();
                props.sendUsername(username, JSONgetted);
                usersMatch++;
            } 
        }

        if (usersMatch === 0) alert("Usuario no encontrado!")
    }
    
    
    
    
    
    return(
        <React.Fragment>
            <section id="usermodalsection-id">
                <form action="" method="post" id="currentuser-id" onSubmit={() => {AccessFlow()}}>
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