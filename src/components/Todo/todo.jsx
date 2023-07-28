import { useState } from "react";
import { v4 as uuid } from "uuid";

const Todo =()=>{

//to do
const[todo,setTodo]=useState();

//todo list
 const [todoList,setTodoList] =useState([]);


 const handleTodoChange = event=>{
    setTodo(event.target.value);}
    //written to do in the to do input

    const handleToDoSubmit= event=>{
        if(event.key==="Enter"){
            const updatedTodoList = [...todoList,{_id:uuid(),todo,isComplete:false}];
            setTodoList(updatedTodoList);
            localStorage.setItem("todo",JSON.stringify(updatedTodoList));

        }
    }
 

 return(

    <span className="todo-container">
        <div className="todo-input-container">
            <input className="todo-input" onChange={handleTodoChange} onKeyPress={handleToDoSubmit}/>

        </div>
    </span>
 )
}

export default Todo;