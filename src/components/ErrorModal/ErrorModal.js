import React from 'react'

function ErrorModal(props) {
  
  
  return (
    <div className="error-overlay">
      <div className="error-modal">
        <div className='head'>
          <h5>Invalid Input</h5>
        </div>
        <div className='content'>
          <span>{props.content}</span>
          <button>Okay</button>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal