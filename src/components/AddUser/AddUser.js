import React, { useState } from 'react'
import Button from '../Button/Button'

function AddUser(props) {
  const [userInput, setUserInput] = useState({
    name: '',
    age: ''
  })

  const inputChangeHandler = (identifier, value) => {
    setUserInput(previousInput => (
      {
        ...previousInput,
        [identifier]: value 
      }
    ) )
  }

  const submitHandler = event => {
    event.preventDefault();

    props.onFormSubmit(userInput);
  }

  return (
    <section className="section1">
      <form onSubmit={submitHandler}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id='username' name='username' onChange={event => inputChangeHandler('name', event.target.value)}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id='age' name='age' onChange={event => inputChangeHandler('age', event.target.value)}/>
        </div>
        <Button type='submit'>Add User</Button>
      </form>
    </section>
  )
}

export default AddUser