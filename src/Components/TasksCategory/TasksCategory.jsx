import React, { useState } from "react";
import './TasksCategory.css'

export const TasksCategory = (props) => {
    const [profileState, setProfileState] = useState(props)


    return(
        <React.Fragment>
            <section id="nexttasksection-id">
                <h2>{props.categorytitle}</h2>
                {props.task}
            </section>
        </React.Fragment>

    )
}

export default TasksCategory;