
import './App.css';
import { useState } from "react";

function App() {
  let[todolist,setTodolist]=useState([])

  let saveToDoList=(event)=>{
    
    let todoname= event.target.todoname.value;
    if(!todolist.includes(todoname)){
      let allTodolist = [...todolist,todoname]
      setTodolist(allTodolist);
    }
    else{
      alert('item already exits..');
    }
    event.preventDefault();

  }

  let list=todolist.map((value,index)=>{

    return(
      <TodoItems value={value} key={index} indexNum={index}
      todolist={todolist} setTodolist={setTodolist}/>
    )

  })

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text"  name="todoname"/><button>ADD</button>
      </form>
      <div className="ulDiv">
        <ul>
        {list}
        </ul>
      </div>
      
    </div>
    
  )
}

export default App

function TodoItems({value,indexNum,todolist,setTodolist}){
  let [status,setStatus]=useState(false)
  let deleteItem=()=>{
    let finalList=todolist.filter((v,i)=>i!=indexNum)
    setTodolist(finalList);
  }
  
  let changeStatus=()=>{
    setStatus(!status)
  }
  return(
    <li className ={(status)? 'todoDone': ''}onClick={changeStatus}>{value} <span onClick={deleteItem}>&times;</span></li>
  )
}
