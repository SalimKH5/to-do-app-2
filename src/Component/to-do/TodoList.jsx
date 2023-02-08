import React, { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import "./todo.css"
import CheckIcon from '@mui/icons-material/Check';
import { color } from '@mui/system';
function TodoList({todos,setTodos,setEditTodo}) {

  const handldelete=({id})=>{
    setTodos(todos.filter((todo)=> todo.id!==id ))
  }

  const handlcomplete=({id})=>{
    setTodos(
      todos.map((item)=>{
        if(item.id=== id ){
          return {...item,completed:!item.completed}
        }
        return item;
      })
    )
  }

  const handleEdit=({id})=>{
    const findtodo=todos.find((todo)=> todo.id===id)
    setEditTodo(findtodo);
  }

 

  return (
    <>
    {
      todos.map((todo) => (
        <div className={` todo ${todo.completed ? 'complete' :''}`} key={todo.id}>

          <p>{todo.title}</p>
          <div className='menu'>
              <CheckIcon   onClick={()=>handlcomplete(todo)}  sx={{
                                                             color:"blue",
                                                             border:"1px solid blue",
                                                             borderRadius:"50%",
                                                             cursor:"pointer"
                                                            }}/>
              <CloseIcon  onClick={()=>handldelete(todo)} sx={{
                                                             color:"red",
                                                             border:"1px solid red",
                                                             borderRadius:"50%",
                                                             cursor:"pointer"
                                                            }}/>
              <CreateIcon   onClick={()=>handleEdit(todo)}  sx={{
                                                             color:"black",
                                                             border:"1px solid black",
                                                             borderRadius:"50%",
                                                             cursor:"pointer"
                                                            }}  />
          </div>
        </div>
      ))
  }
  </>
  );
}

export default TodoList