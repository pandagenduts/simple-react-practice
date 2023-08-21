import React from 'react'
import Card from '../Card/Card'


function UsersList() {
  return (
    <section className="section2">
      <ul>
        <Card name='Donny' age={24} ></Card>
        <Card name='Tasya' age={22} ></Card>
        <Card name='Bryna' age={23} ></Card>
      </ul>
    </section>
  )
}

export default UsersList