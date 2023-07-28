import { useEffect } from "react";
import { useBrowser } from "../../Context/Browser-context";

export const Task =()=>{


const {browserDispatch,time}= useBrowser();


useEffect(()=>{
    getCurrentTime()
},[time])

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

     }



    return(
        <div className="task-container ">
            <span className="current-time">{time}</span>
            
        </div>
    )
}