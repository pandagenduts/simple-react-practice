import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
import ErrorModal from './components/ErrorModal/ErrorModal'
import OnEmpty from './components/OnEmpty/OnEmpty';

function App() {
  const [userInput, setUserInput] = useState([])
  const [errorModal, setErrorModal] = useState(null)

  const submitFunction = theUserInput => {
    if (theUserInput.name.length === 0 || theUserInput.age.length === 0) {
      setErrorModal('form empty');
      return;
    }
    if (+theUserInput.age < 1) {
      setErrorModal('age < 0');
      return;
    }
    setUserInput(prevInputs => {
      const updatedInputs = [...prevInputs];
      const inputLength = updatedInputs.length
      const updatedSingleInput = {
        ...theUserInput,
        id: inputLength + 1
      }
      updatedInputs.push(updatedSingleInput)

      return updatedInputs;
    }
    );
  }

  console.log(userInput);

  const closeModalHandler = () => {
    setErrorModal(false)
  }

  let theErrorModal = null;

  if (errorModal) {
    if (errorModal === 'form empty') {
      theErrorModal = <ErrorModal content='Please enter a valid name and age (non-empty values).' closeModal={closeModalHandler}></ErrorModal>
    }
    else if (errorModal === 'age < 0') {
      theErrorModal = <ErrorModal content='Age should be greater than 0' closeModal={closeModalHandler}></ErrorModal>
    }
  }

  const deleteItemHandler = itemID => {
    setUserInput( prevInputs => {
      const updatedInputs = prevInputs.filter( input => input.id !== itemID )
      return updatedInputs;
    } )
  }

  return (
    <main>
      <AddUser onFormSubmit={submitFunction} />

      {/* {Object.keys(userInput).length > 0 && <UsersList datas={userInput} />} */}
      {userInput.length > 0 ? <UsersList datas={userInput} onDeleteItem={deleteItemHandler}/> : <OnEmpty />}

      {theErrorModal}

    </main>
  )
}
export default App;
