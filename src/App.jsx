import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { useState } from 'react';
function App() {

  const [todos, setTodos] = useState(['tod', 'setTodos','randomg']);

  return (
    <div className='main'>
      <div className='h1'>
        <h1>TodoList broski</h1>
      </div>

      <TodoInput />
      <TodoList todos={too}/>

    </div>
  )
}

export default App
