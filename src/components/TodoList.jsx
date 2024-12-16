import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList(props) {
    const {todos} = props
  return (
    <ul>TodoList
        {todos.map((todos, i) =>  {
            return (
                <TodoCard {...props} key={i} index={i} >
                    <p>{todos}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
