import React, {useState, useEffect} from "react";
import './Task.css';



export const Task = () => {
    return(
        <React.Fragment>
            <article id="taskarticle-id">
                <p>Sacar el perro</p><br /> 
                <p>Nov 11, 10:00am</p>
                <p>ETA: 30mins</p>  
                <p>Remaining Time: 30mins</p>    
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, omnis laborum? Suscipit debitis, alias laudantium quos placeat delectus aut adipisci beatae enim quibusdam optio ut harum fugit, vel quaerat eum.</p>  
            </article>
        </React.Fragment>
    )
}

export default Task;