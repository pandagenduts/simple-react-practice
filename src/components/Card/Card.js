import React from 'react'

function Card(props) {
  const deleteHandler = () => {
    props.onDelete(props.id)
  }
  
  return (
    <li onClick={deleteHandler}>
      <p>{props.name} ({props.age} years old)</p>
    </li>
  )
}

export default Card