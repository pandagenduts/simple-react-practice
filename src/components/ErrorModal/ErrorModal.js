import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button/Button'

function ErrorModal(props) {
  const setCloseModal = () => {
    props.closeModal()
  }



  return (
    <>
      {ReactDOM.createPortal(<div className="error-overlay" onClick={setCloseModal}>
        <div className="error-modal">
          <div className='head'>
            <h5>Invalid Input</h5>
          </div>
          <div className='content'>
            <span>{props.content}</span>
            <Button onClick={setCloseModal}>Okay</Button>
          </div>
        </div>
      </div>,
        document.getElementById('modal-root')
      )}
    </>

  )
}

export default ErrorModal