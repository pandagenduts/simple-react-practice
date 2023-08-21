import React from 'react'
import Button from '../Button/Button'

function ErrorModal(props) {
  const setCloseModal = () => {
    props.closeModal()
  }
  
  return (
    <div className="error-overlay" onClick={setCloseModal}>
      <div className="error-modal">
        <div className='head'>
          <h5>Invalid Input</h5>
        </div>
        <div className='content'>
          <span>{props.content}</span>
          <Button onClick={setCloseModal}>Okay</Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal