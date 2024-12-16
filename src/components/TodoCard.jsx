import React from 'react'

export default function TodoCard({children}) {
  return (
    <li className='TodoCard'>
        {children}
        <div className=''>
            <button>
                <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
  )
}
