import React from 'react'
import './Add.css'

export const Add = ({handleChange, addItems , value} ) => {
  return (
    <div>
      <div className="add-container">
        <input value={value} type="text" placeholder='New Todo' onChange={handleChange}   />
        <button onClick={addItems} >ADD TODO</button>
      </div>
    </div>
  )
}

