import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList({tododos}) {

  return (
    <ul>TodoList
        {tododos.map((tododos, i) =>  {
            return (
                <TodoCard key={i}>
                    <p>{tododos}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
