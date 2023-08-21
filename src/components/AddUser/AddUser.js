import React from 'react'
import Button from '../Button/Button'

function AddUser() {


  return (
    <section className="section1">
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id='username' name='username' />
        </div>
        <div className="input-wrapper">
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id='age' name='age' />
        </div>
        <Button type='submit'>Add User</Button>
      </form>
    </section>
  )
}

export default AddUser