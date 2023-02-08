import React, { useEffect, useState } from 'react'
import "./todo.css"

import {v4 as uuidV4} from "uuid"

function TodoForm({input,setInput,todos,setTodos,editTodo,setEditTodo}) {

  
    const updateTodo=(title,id,completed)=>{
      const newTodo = todos.map((todo)  =>
        todo.id === id ? { id, title ,completed} : todo
      );
      setTodos(newTodo);
      setEditTodo("");
      
    }

    const onFormSubmit=(e)=>{
        e.preventDefault();
        if(!editTodo){
        setTodos([...todos,{id:uuidV4(),title:input,completed:false}])
        setInput('')
        }else{
          updateTodo(input,editTodo.id,editTodo.completed)
        }
    }


 

    useEffect(()=>{
      if(editTodo){
        setInput(editTodo.title)
      }else{
        setInput("")
      }
    },[setInput,editTodo])
  return (

    <form className="input-content" onSubmit={onFormSubmit}>
        <input type="text"  value={input} onChange={(e)=>{
            setInput(e.target.value)
        }}/>
        <button type="submit"> {editTodo ? "OK":"Add to do"}</button>
       
    </form>

  )
}

export default TodoForm