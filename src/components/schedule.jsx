import React from 'react'

const Schedule = ({ index, id, exercise, day, completed, toggleCompleted, deleteItem }) => {
  const styles = {
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? 'darkblue' : 'inherit'
  }
  const handleClick = () => {
    toggleCompleted(id)
  }

  const handleDelete = () => {
    deleteItem(index)
  }
  return (
    <div className="exercise-item">
      <p style={styles} key={id} onClick={handleClick}>
        {exercise}
      </p>
      <p>{day}</p>
      <button 
      className="button btn-delete" key={index} onClick={handleDelete}>
        -
      </button>
    </div>
  )
}

export default Schedule
