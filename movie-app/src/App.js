import React from 'react'
import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const onChange = (e) =>{
    setTodo(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(todo ===""){
      return ;
    }
    setTodo("");
    setTodos(currentArray =>[todo, ...currentArray])
    console.log(todo)
  }
  console.log(todos)
  return (
    <div>
      <h1>my to do! ({todos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={todo} type="text" placeholder="write your todo"></input>
      <button>Add to do</button>
      </form>
      <hr />
      <ul>
      {todos.map((todo, idx)=>(
        <li key={idx}>{todo}</li>
      ))}
      </ul>
    </div>
  )
}

export default App
