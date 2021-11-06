import './App.css';
import React from 'react';
import AddNewTask from './Components/AddNewTask/AddNewTask';
import TasksCategory from './Components/TasksCategory/TasksCategory';
import Task from './Components/Task/Task';
import UserModal from './Components/UserModal/UserModal';
import { useEffect, useState } from 'react';


function App() {
  
  const [Modal, ShowModal] = useState(true);


  const HandleShowModal = () => {
      return (<UserModal />)    
  }




  return (

    Modal === true ? 
    HandleShowModal():
    <React.Fragment>
        <header>
            <h1>Task Manager</h1>
        </header>
         <main>
            <AddNewTask/>
            <TasksCategory categorytitle="Next Tasks" task={<Task/>}/>
            <TasksCategory categorytitle="Actual Tasks"/>
            <TasksCategory categorytitle="Expired Tasks"/>
        </main> 
    </React.Fragment>
  );
}

export default App;
