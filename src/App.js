import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './Component/to-do/TodoList';
import TodoForm from './Component/to-do/TodoForm';
function App() {


  const initialeState=JSON.parse(localStorage.getItem('todos')) || []
  const [input,setInput]=useState('');
  const [todos,setTodos]=useState(initialeState);
  const [editTodo,setEditTodo]=useState(null);
  

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <div className="App">
      <div className='App-content'>
        <h1>What the plan today</h1>
          <TodoForm
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        <div className='todo-content'>
              <TodoList todos={todos} setTodos={setTodos}   setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
