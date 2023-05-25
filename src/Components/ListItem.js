import React from 'react'

export default function ({todo, id ,checkComplete}) {
  return (
    <div>
        <li>
        <label htmlFor={id} className={todo.complete ? "active" : "" }>
            <input type='checkbox' id={id}  checked={todo.complete}
            onChange={()=> checkComplete(id)}/>
            {todo.name}
        </label>
        {/* <button disabled={todo.complete}>Edit</button> */}
    </li>
    </div>
  )
}
