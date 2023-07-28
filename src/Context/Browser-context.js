import { createContext,useContext, useReducer } from "react";
import { browserReducer } from "../reducer/browser-reducer";

const initialValue={
    name:"",
    time:""
}

const BrowserContext = createContext(initialValue);

const BrowserProvider=({children})=>{
//  const [ state,dispatch]= useReducer(browserReducer,initialValue);
const [{name,time} , browserDispatch]= useReducer(browserReducer, initialValue);

    return(
    <BrowserContext.Provider value={ {name,time,browserDispatch}}>
    {children}
    </BrowserContext.Provider>) 
}

const useBrowser = ()=> useContext(BrowserContext);

export{BrowserProvider, useBrowser}