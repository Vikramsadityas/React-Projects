import React from "react"
import AddTodo from "./Components/AddTodo.jsx"
import TodoList from "./Components/Todos.jsx"
function App() {
  
  return (
   <>
    <h1 className="text-center font-bold text-4xl">YOURTODO Application</h1>
    <AddTodo />
    <TodoList />
   </>
  )
}

export default App
