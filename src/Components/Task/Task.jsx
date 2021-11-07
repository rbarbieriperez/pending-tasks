import React, {useState, useEffect} from "react";
import './Task.css';



export const Task = (props) => {
    return(
        <React.Fragment>
            <article id="taskarticle-id">
                <p>{props.taskname}</p><br /> {/*Task's title*/}
                <p>{props.tasktime}</p>  {/*Task's time*/}
                <p>ETC: {props.tasketc}</p>  {/*Task's ETC*/}
                <p>Remaining Time: 0</p>  {/*Task's Remaining time*/}   
                <p>{props.taskdesc}</p>  {/*Task's short desc*/}
            </article>
        </React.Fragment>
    )
}

export default Task;