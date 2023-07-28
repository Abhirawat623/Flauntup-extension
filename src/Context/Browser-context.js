import { createContext,useContext, useReducer } from "react";
import { browserReducer } from "../reducer/browser-reducer";

const initialValue={
    name:"",
    time:"",
    message:"",
    task:null
}

const BrowserContext = createContext(initialValue);

const BrowserProvider=({children})=>{
//  const [ state,dispatch]= useReducer(browserReducer,initialValue);
const [{name,time,message,task} , browserDispatch]= useReducer(browserReducer, initialValue);

    return(
    <BrowserContext.Provider value={ {name,time,message,task,browserDispatch}}>
    {children}
    </BrowserContext.Provider>) 
}

const useBrowser = ()=> useContext(BrowserContext);

export{BrowserProvider, useBrowser}