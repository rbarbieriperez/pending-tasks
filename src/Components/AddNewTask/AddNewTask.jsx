import React, {useState, useEffect}  from 'react';
import './AddNewTask.css';
import add from './add.png'

export const AddNewTask = () => {
    const [formVisible, isFormVisible] = useState("form-hide");

    const HandleFormVisibility = () => {
        if(formVisible === "form-hide") isFormVisible(formVisible => "form-show");
        else isFormVisible(formVisible => "form-hide")
    }

    return(
        <React.Fragment>
            <section id="newtask-section">
                <p onClick={() => HandleFormVisibility()}>Add New Task</p>
                <form action="" id="task-form" className={formVisible}>
                    <label htmlFor="taskname">Task Name:</label>
                    <input type="text" name="taskname" id="taskname-id" tabIndex="1" required="required" minLength="1" maxLength="50" placeholder="Take out the dog"/>
                    <label htmlFor="taskdate">Starts:</label>
                    <input type="datetime-local" name="taskdate" id="tasktime-id" tabIndex="2" required="required"/>
                    <label htmlFor="tasktime">ETC:</label>
                    <input type="time" name="tasktime" id="tasktime-id" tabIndex="3" required="required"/>
                    <button><img src={add} alt="Add New Task" tabIndex="5"/></button> <br />
                    <label htmlFor="taskdesc" id="textarea-label">Short Description:</label>
                    <textarea name="taskdesc" id="taskdesc-id" cols="70" rows="4" tabIndex="4" maxLength="250" placeholder="Get my water bottle. Make sure to have the food in the bag. Don't forget..."></textarea>
                </form>
            </section>
        </React.Fragment>
    );


}

export default AddNewTask;