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



  const HandleShowModal = () => {
       ShowModal(false)   
  }

  const HandleReceivedUserData = (recievedJSON) => {
      //Filter the cards from the JSON by the username that's unique.
      
      let userCards = []
      
      for (let element of recievedJSON){
        updateUsername(element.nombre + " " + element.apellidos) //Updated the username to be showed on the screen
        updateUserID(element.id);
        consumeAPI(`https://62423aacb6734894c14e7f14.mockapi.io/users/${element.id}/cards`)
        .then(data => {
          for (let card of data){
            if (card.taskName !== "" && card.startingTime !== ""){
              let cardTemplate = {
                actualStatus: card.actualStatus,
                cardId: card.cardId,
                etc: card.etc,
                shortDesc:card.shortDesc,
                startingTime:card.startingTime,
                taskName:card.taskName
              }
              console.log(`cardTemplate tiene: ${JSON.stringify(cardTemplate)}`)
              userCards.push(cardTemplate);
            }
          }
          console.log(`userCards tiene ${JSON.stringify(userCards)}`)
          FilterPerCategory(userCards)
        })

        
      } 
      
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
              if(property === "startingTime"){
                let ArraySplitted = value.split(" "); //Split the getted string to get only the time string with xx:xx format
                let ArrayTaskTimeFullFormatString = ArraySplitted[1]; //Save the string with xx:xx format in a separate variable
                let ArrayTaskTimeArray = ArrayTaskTimeFullFormatString.split(":"); //Save a new string with the xxxx format 
                let TaskTimeInNumber = parseInt(ArrayTaskTimeArray[0] + ArrayTaskTimeArray[1]) //Place the two values together into a new string and convert it to a int 

                console.log(`ArraySplitted tiene ${ArraySplitted} - ArrayTaskTimeFullFormatString tiene ${ArrayTaskTimeFullFormatString} - ArrayTaskTimeArray tiene ${ArrayTaskTimeArray} - TaskTimeInNumber tiene ${TaskTimeInNumber}`)


                if (compareDates(ArraySplitted[0])) { //true date given is newer than the actual
                  //task should be next
                  ShowTasksNext(element);
                } else { //task is older than actual time, we must evaluate if should be on expired tasks, actual or next depending on the time
                  if(TaskTimeInNumber > (ActualTime + ETCTime)) ShowTasksNext(element); //Per next time
                  else if(((TaskTimeInNumber +ETCTime) >= ActualTime) && (TaskTimeInNumber <= (ActualTime + ETCTime))) ShowTasksActual(element); //Per actual time
                  else if (TaskTimeInNumber < ActualTime) ShowTasksExpired(element); //Per expired time 
                  
                }
                
              }
          }
      });

  
  
  
  
    
    
  
  
    
    
  }

  const compareDates = (dateGiven) => {
    const dateObj = new Date().toISOString().split('T')[0];

    if(dateGiven > dateObj) {
      return true;
    } else {
      return false;
    }
  
  }

  const ShowTasksNext = (card) => {
    updateNextTasks(nextTasks => [...nextTasks,<Task taskname={card.taskName} tasktime={card.startingTime} tasketc={card.etc} taskdesc={card.shortDesc}/>])
    console.log("The task is next")


    
  }
  const ShowTasksActual = (card) => {

    updateActualTasks(actualTasks => [...actualTasks,<Task taskname={card.taskName} tasktime={card.startingTime} tasketc={card.etc} taskdesc={card.shortDesc}/>])
    console.log("The task is Actual")
    
  }

  const ShowTasksExpired = (card) => {
    updateExpiredTasks(expiredTasks => [...expiredTasks,<Task taskname={card.taskName} tasktime={card.startingTime} tasketc={card.etc} taskdesc={card.shortDesc}/>])
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
            <AddNewTask IDUser={userid}/>
            <TasksCategory categorytitle="Next Tasks" task={nextTasks}/>
            <TasksCategory categorytitle="Actual Tasks" task={actualTasks}/>
            <TasksCategory categorytitle="Expired Tasks" task={expiredTasks}/>
        </main> 
    </React.Fragment>
  );
}

export default App;
