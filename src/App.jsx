import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { useState } from 'react';
function App() {

  const [todos, setTodos] = useState(['tod', 'setTodos','randomg']);

  function handleAddTodos(newTodo){
    const newList = [...todos, newTodo];
    setTodos(newList)

  return (
    <div className='main'>
      <div className='h1'>
        <h1>TodoList broski</h1>
      </div>

      <TodoInput todos={todos} setTodos={setTodos} handleAddTodos={handleAddTodos} />
      <TodoList tododos={todos}/>

    </div>
  )
}

export default App
