import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'; // Import the required icons


const Lists = (props) => {
    
  return (
    <>
    <div className='todo_style'>
    <FontAwesomeIcon icon={faCircleXmark}
        onClick={props.onSelect}
        />
   <li>{props.text}</li>
   </div>
   </>
  )
}

export default Lists
