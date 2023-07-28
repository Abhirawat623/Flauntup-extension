import { useEffect } from "react";
import { useBrowser } from "../../Context/Browser-context";
import { Fragment } from "react";

export const Task =()=>{


const {browserDispatch,time,message,name}= useBrowser();


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
         //for time
         browserDispatch({
            type: "MESSAGE",
            payload : hour >=0 && hour<=12 ? "Good Morning" : hour <= 12 && hour <=17 ? "Good Afternoon" : "Good Evening "
         })
     }



    return(
        <div className="task-container ">
            <span className="current-time heading-2">{time}</span>
            <span className="message heading-3">{message} {name}</span>
            <Fragment>
                <span className=" focus heading-4">
                    What's your focus today?
                    <form>
                        <input className="task-input" required />
                    </form>
                </span>
            </Fragment>
        </div>
    )
}