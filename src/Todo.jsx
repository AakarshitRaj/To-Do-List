import React, { useState } from 'react'
import './Todo.css'
import { List } from 'rendition'

const Todo = () => {
    const [input, setinput] = useState('')

    const [List, setList] = useState([])
    const itemEvent=(event)=>{
        setinput(event.target.value)
    }

    const ListofItem=()=>{
        setList((oldItems)=>{
            return [...oldItems,input];
        })
    }

  return (
    <div className='main'>
      <h1>To-Do-List</h1>
      <input type='text' placeholder='Add a Items' onChange={itemEvent}/>
      <button onClick={ListofItem}> + </button>

      <ol>
        {List.map((itemval)=>{
            return <li>{itemval}</li>
        })
        
        
        }
        
      </ol>
    </div>
  )
}

export default Todo
