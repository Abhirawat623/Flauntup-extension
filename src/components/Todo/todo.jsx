import { useEffect, useState } from "react";
import { stringify, v4 as uuid } from "uuid";

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

    //to ceck addedlist

    const handleTodoCheckTodoList=(todoId)=>{
        const updatedTodoList = todoList.map(
            todo => todo._id  === todoId  ? { ...todo,isComplete: !todo.isComplete }: todo )
        setTodoList(updatedTodoList);
        
        localStorage.setItem("todo",JSON.stringify(updatedTodoList));
        setTodo([]);
    }

   
    //clear todolist

    const handleTodoClear=(todoId)=>{
        const filterdTodo = todoList.filter(({_id})=>
            _id !== todoId
        )
     setTodoList(filterdTodo);
     localStorage.setItem("todo",JSON.stringify(filterdTodo));
    }


  //to get todolist
   
  useEffect(()=>{
    const todoWritten = JSON.parse(localStorage.getItem("todo"));
    todoWritten && setTodoList(todoWritten)
 },[])


 return(

    <span className="todo-container">
        <div className="todo-input-container">
            <input className="todo-input" onChange={handleTodoChange} onKeyPress={handleToDoSubmit}/>

        </div>
    


    <div className="todo-list">
 {todoList && todoList.map(({todo,_id,isComplete})=>{


  
    return(
        <div key={_id}>
            
                <input id={_id } type="checkbox" className="user-task heading-5 " onChange={()=>handleTodoCheckTodoList(_id)} checked={isComplete}/>
                <label for={_id} className={isComplete ? "todo-list-heading  cross d-flex " : "todo-list-heading "} >{todo}</label>
                <button id="'user-task-check'" onClick={()=>handleTodoClear(_id)}>X</button>
                

                {/*  <label for="user-task-check"  className={isCheck ? "heading-6  cross d-flex " : "heading-6 "} ><input className="user-task heading-5" 
                 type="checkbox" 
                 id="user-task-check"
                 checked={isCheck}
                 onChange={handleCheckTask} />{task}  </label>
                 <button className="user-task-clear-btn" onClick={handleTaskClear}>X</button> */}
        </div>

    )
 }
 )}
    </div>

 </span>
 )
}

export default Todo;