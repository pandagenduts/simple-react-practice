import React from 'react'

function Card(props) {
  return (
    <li>
      <p>{props.name} ({props.age} years old)</p>
    </li>
  )
}

export default Card