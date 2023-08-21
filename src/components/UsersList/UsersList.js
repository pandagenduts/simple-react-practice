import React from 'react'
import Card from '../Card/Card'


function UsersList(props) {
  console.log(props);
  return (
    <section className="section2">
      <ul>
        {props.datas.map(item => (
          <Card name={item.name} age={item.age} key={item.id} id={item.id} onDelete={props.onDeleteItem}></Card>
        ))}
      </ul>
    </section>
  )
}

export default UsersList