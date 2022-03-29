import React, {useState, useEffect}  from 'react';
import './AddNewTask.css';
import add from './add.png'
import { createRef } from 'react/cjs/react.production.min';
import { PostAPI } from '../utilities/PostAPI';


export const AddNewTask = (props) => {
    const [formVisible, isFormVisible] = useState("form-hide");
    const [userID, updateUserID] = useState(0);

    const taskName = createRef();
    const taskDate = createRef();
    const taskETC = createRef();
    const taskDesc = createRef();

    const HandleFormVisibility = () => {
        if(formVisible === "form-hide") isFormVisible(formVisible => "form-show");
        else isFormVisible(formVisible => "form-hide")
    }


    useEffect(() => {
        updateUserID(props.IDUser)
    },[props.IDUser])

    const HandleFormSubmit = (event) => {

        const taskTemplate = {
            taskName:String(taskName.current.value),
            shortDesc: String(taskDesc.current.value),
            startingTime: String(taskDate.current.value),
            etc:Number(taskETC.current.value),
            actualStatus: "needs to be implemented"
        }
    
        //Send the data
        PostAPI(`https://62423aacb6734894c14e7f14.mockapi.io/users/${userID}/cards`,JSON.stringify(taskTemplate))
        .then(res =>{ 
            if(res.ok){
                alert("Tarea creada con éxito!")
            }
            
        })
        event.preventDefault();
    }

    return(
        <React.Fragment>
            <section id="newtask-section">
                <p onClick={() => HandleFormVisibility()}>Add New Task</p>
                <form action="" id="task-form" className={formVisible} onSubmit={HandleFormSubmit}>
                    <label htmlFor="taskname">Task Name:</label>
                    <input type="text" name="taskname" id="taskname-id" tabIndex="1" required="required" minLength="1" maxLength="50" placeholder="Take out the dog" ref={taskName}/>
                    <label htmlFor="taskdate">Starts:</label>
                    <input type="datetime-local" name="taskdate" id="tasktime-id" tabIndex="2" required="required" ref={taskDate}/>
                    <label htmlFor="tasktime">ETC:</label>
                    <input type="text" name="tasktime" id="tasktime-id" tabIndex="3" required="required" ref={taskETC} placeholder="10"/>
                    <label htmlFor="tasktime-id">Mins</label>
                    <button><img src={add} alt="Add New Task" tabIndex="5"/></button> <br />
                    <label htmlFor="taskdesc" id="textarea-label">Short Description:</label>
                    <textarea name="taskdesc" id="taskdesc-id" cols="70" rows="4" tabIndex="4" maxLength="250" placeholder="Get my water bottle. Make sure to have the food in the bag. Don't forget..." ref={taskDesc}></textarea>
                </form>
            </section>
        </React.Fragment>
    );


}

export default AddNewTask;