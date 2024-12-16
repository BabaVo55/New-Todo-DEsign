import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { useState } from 'react';
function App() {

  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('')   

  function handleAddTodos(newTodo){
    if (!newTodo){
      return;
    }
    const newList = [...todos, newTodo];
    setTodos(newList)
    setCurrentTodo('')
  }

  function handleDeleteTodos(id){
    const newList = todos.filter((todo, index) => index !== id)

    setTodos(newList)
  }

  function handleEditTodos(index){
    let todoToEdit = todos.filter((todo, todoIndex) => todoIndex === index)
    setCurrentTodo(todoToEdit)
    handleDeleteTodos(index)
  }

  return (
    <div className='main'>
      <div className='h1'>
        <h1>TodoList broski</h1>
      </div>

      <TodoInput todos={todos} setTodos={setTodos} handleAddTodos={handleAddTodos} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} />

    </div>
  )
}

export default App
