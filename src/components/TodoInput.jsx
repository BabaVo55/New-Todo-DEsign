import React, {useState} from 'react'

export default function todoInput({handleAddTodos, todos, setTodos}) {

    const [currentTodo, setCurrentTodo] = useState('')    
    function handleChange(e){
        setCurrentTodo(e.target.value);
    }
  return (
    <div className='TodoInput'>
        <input className='input' type="text" value={currentTodo} onChange={handleChange} placeholder='Enter nigger' />
        <button className='button' onClick={() => handleAddTodos(currentTodo)} >Press mE NiggR</button>
    </div>
  )
}
