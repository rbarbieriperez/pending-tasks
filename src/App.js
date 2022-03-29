import './App.css';
import React from 'react';
import AddNewTask from './Components/AddNewTask/AddNewTask';
import TasksCategory from './Components/TasksCategory/TasksCategory';
import Task from './Components/Task/Task';
import UserModal from './Components/UserModal/UserModal';
import { useEffect, useState } from 'react';
import { consumeAPI } from './Components/utilities/consumeAPI';

const App = (props) => {
  
  const [Modal, ShowModal] = useState(true);
  const [username, updateUsername] = useState("")
  const [userid, updateUserID] = useState(0);

  //Cards hooks
  const [actualTasks, updateActualTasks] = useState([])
  const [nextTasks, updateNextTasks] = useState([])
  const [expiredTasks, updateExpiredTasks] = useState([])



  useEffect (() => {
    consumeAPI(`https://62423aacb6734894c14e7f14.mockapi.io/users/${userid}/cards`)
  },[userid])

  const HandleShowModal = () => {
       ShowModal(false)   
  }

  const HandleReceivedUserData = (username, recievedJSON) => {
      //Filter the cards from the JSON by the username that's unique.
      updateUsername(username)
      let userCards = []
      
      for (let element of recievedJSON){
        //updateUserID(element.id)
        alert(element.id)
      } 



     /* for(let element of Object.values(recievedJSON.cards)){
          if(element.username_card === username){

            let cardPreset = {
              username_card: "",
              card_id: 0,
              short_desc: "",
              starting_time: "",
              etc: 0,
              notes: "",
              actual_status: ""
            }
            console.log(element.username_card, element.card_id, element.short_desc, element.starting_time, element.etc)
            cardPreset.username_card = element.username_card;
            cardPreset.card_id = element.card_id;
            cardPreset.short_desc = element.short_desc;
            cardPreset.starting_time = element.starting_time;
            cardPreset.etc = element.etc;
            cardPreset.notes = element.notes;
            cardPreset.actual_status = element.actual_status;

            userCards.push(cardPreset);

          }
        
       }   */
       FilterPerCategory(userCards)
  }

  const FilterPerCategory = (userCards) => {
      let today = new Date();
      let actualHour = today.getHours();
      let actualMinutes = today.getMinutes();
      let ActualTime = parseInt(actualHour.toString() + actualMinutes.toString());
      let ETCTime = 0;


      userCards.forEach(element => {

          for(let [property,value] of Object.entries(element)){
              if (property === "etc"){
                ETCTime = value;
              }
              if(property === "starting_time"){
                let ArraySplitted = value.split(", "); //Split the getted string to get only the time string with xx:xx format
                let ArrayTaskTimeFullFormatString = ArraySplitted[1]; //Save the string with xx:xx format in a separate variable
                let ArrayTaskTimeArray = ArrayTaskTimeFullFormatString.split(":"); //Save a new string with the xxxx format 
                let TaskTimeInNumber = parseInt(ArrayTaskTimeArray[0] + ArrayTaskTimeArray[1]) //Place the two values together into a new string and convert it to a int 

                /*Needs to be updated to use comparision of datetimes instead of strings*/
                if(TaskTimeInNumber > (ActualTime + ETCTime)) ShowTasksNext(element); //Per next time
                else if(((TaskTimeInNumber +ETCTime) >= ActualTime) && (TaskTimeInNumber <= (ActualTime + ETCTime))) ShowTasksActual(element); //Per actual time
                else if (TaskTimeInNumber < ActualTime) ShowTasksExpired(element); //Per expired time 
              }
          }
      });

  }

  const ShowTasksNext = (card) => {
    updateNextTasks(nextTasks => [...nextTasks,<Task taskname={card.short_desc} tasktime={card.starting_time} tasketc={card.etc} taskdesc={card.notes}/>])
    console.log("The task is next")


    
  }
  const ShowTasksActual = (card) => {

    updateActualTasks(actualTasks => [...actualTasks,<Task taskname={card.short_desc} tasktime={card.starting_time} tasketc={card.etc} taskdesc={card.notes}/>])
    console.log("The task is Actual")
    
  }

  const ShowTasksExpired = (card) => {
    updateExpiredTasks(expiredTasks => [...expiredTasks,<Task taskname={card.short_desc} tasktime={card.starting_time} tasketc={card.etc} taskdesc={card.notes}/>])
    console.log("The task expired")

    
  }



  

  return (

    Modal === true ? 
    <UserModal HandleShowModal={HandleShowModal} sendUsername = {HandleReceivedUserData}/>:
    <React.Fragment>
        <header>
            <h1>Task Manager</h1>
            <p>{"Welcome: " + username}</p>
        </header>
         <main>
            <AddNewTask/>
            <TasksCategory categorytitle="Next Tasks" task={nextTasks}/>
            <TasksCategory categorytitle="Actual Tasks" task={actualTasks}/>
            <TasksCategory categorytitle="Expired Tasks" task={expiredTasks}/>
        </main> 
    </React.Fragment>
  );
}

export default App;
