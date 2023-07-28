import { useEffect, useState } from "react";
import { useBrowser } from "../../Context/Browser-context";
import { Fragment } from "react";
import Todo from "../../components/Todo/todo";

export const Task =()=>{


const {browserDispatch,time,message,name,task}= useBrowser();


     useEffect(()=>{
      getCurrentTime()},[time])

     const getCurrentTime=()=>{

        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();

        const hour = hours < 10? "0"+ hours: hours;
        const minute = minutes < 10 ? "0"+ minutes: minutes;

        const currentTime= hour+ ":"+ minute;

        setTimeout(getCurrentTime,1000);

        
        //for time
         browserDispatch({
            type: "TIME",
            payload: currentTime
         });
   

         //for time
         browserDispatch({
            type: "MESSAGE",
            payload : hour >=0 && hour<=12 ? "Good Morning" : hour <= 12 && hour <=17 ? "Good Afternoon" : "Good Evening "
         })
     }     
     
     //prevent default for preventing after new task
       const handleTaskSubmit=event=>{
        event.preventDefault();
  }

     //task
        const handleTaskChange = event=>{
    
          if(event.key==="Enter" && event.target.value.length>0){
            browserDispatch({
            type: "TASK",
            payload: event.target.value
          })
          localStorage.setItem("task", event.target.value);
       
     //used to store the date of the new task
           localStorage.setItem("date", new Date().getDate());

         }

     }

     //for new tasks
       useEffect(()=>{
       browserDispatch({
       type: "TASK",
       payload: localStorage.getItem("task")
       })})

     //for checkboxed tasks
       const [isCheck, setIsCheck]=useState(false);
    
       const handleCheckTask=(event)=>{

       if(event.target.checked){
       setIsCheck(isCheck=>!isCheck)
       }
       else{
       setIsCheck(isCheck=>!isCheck)
       }
    
       localStorage.setItem("checkTask", isCheck);
     
       }

        const handleTaskClear=()=>{
        browserDispatch({
          type:"CLEAR"
        })
        setIsCheck(false);
        localStorage.removeItem("task");
        localStorage.removeItem("checkTask")
        }
    

      //todo openner

      const [toDoOpen,setToDoOpen]=useState(false);
      
      const handkleToDoOpen=()=>{
        setToDoOpen(toDoOpen=>!toDoOpen);
      }

    return(
        <div className="task-container  ">
            <span className="current-time heading-1 ">{time}</span>
            <span className="message heading-4">{message} {name}</span>
          
        { name!==null && task === null ? ( 
             <Fragment>
                <span className=" focus heading-5">
                    What's your focus today?
                    <form onSubmit={handleTaskSubmit}>
                        <input className="task-input" required onKeyPress={handleTaskChange}/>
                    </form>
                </span>
            </Fragment>) : (
            <div className="user-focus-container" >
                <span className="user-focus heading-5">Today's focus</span>
                <div className="d-flex direction-row align-center justify-center  gap">
                <label for="user-task-check"  className={isCheck ? "heading-6  cross d-flex " : "heading-6 "} ><input className="user-task heading-5" 
                 type="checkbox" 
                 id="user-task-check"
                 checked={isCheck}
                 onChange={handleCheckTask} />{task}  </label>
                 <button className="user-task-clear-btn" onClick={handleTaskClear}>X</button>
                 </div>
        
            </div>)}
            
            {/* todo */}


            <div className="todo-bar">
              {toDoOpen && <Todo/>}
              {/* if button clicked the stats is toggled */}
              <button className="todo-opener-btn heading-5" onClick={handkleToDoOpen}>To-Do</button>
             
            </div>
        </div>
    )
}