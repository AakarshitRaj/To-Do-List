import React, { useState } from 'react'
import './Todo.css'
import Lists from './Lists'

const Todo = () => {
    const [input, setinput] = useState('')

    const [List, setList] = useState([]);

    const itemEvent=(event)=>{
        setinput(event.target.value)
    }

    const ListofItem=()=>{
        setList((oldItems)=>{
            return [...oldItems,input];
        });

         setinput("");// Clear the input field after adding an item.
    }
    const deleteItems=()=>{
        console.log('deleted')
    }

  return (
    <div className='main'>
        <div className='center'>
      <h1>To-Do-List</h1>
      <input type='text' placeholder='Add a Items' value={input} onChange={itemEvent}/>
      <button onClick={ListofItem}> + </button>

      <ol>
        {List.map((itemval,index)=>{
            return(
            <Lists key={index} 
            id={index}
            text={itemval}
            onSelect={deleteItems}
            />
            )
        })
        }
        
      </ol>
      </div>
    </div>
  )
}

export default Todo
