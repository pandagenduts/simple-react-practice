import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
import ErrorModal from './components/ErrorModal/ErrorModal'

function App() {
  const [userInput, setUserInput] = useState()
  const [errorModal, setErrorModal] = useState(null)

  const submitFunction = theUserInput => {
    if (theUserInput.name.length === 0) {
      setErrorModal('form empty');
      return;
    }
    if (theUserInput.age.length === 0) {
      setErrorModal('age empty');
      return;
    }
    setUserInput(theUserInput);
  }

  const closeModalHandler = () => {
    setErrorModal(false)
  }

  let theErrorModal = null;

  if (errorModal) {
    if (errorModal === 'name empty') {
      theErrorModal = <ErrorModal content='Please enter a valid name and age (non-empty values).' closeModal={closeModalHandler}></ErrorModal>
    }
    else if (errorModal === 'age empty') {
      theErrorModal = <ErrorModal content='Age is empty' closeModal={closeModalHandler}></ErrorModal>
    }
  }

  // if (userInput?.name.length === 0) {
  //   theErrorModal = <ErrorModal content='Name is empty' closeModal={closeModalHandler}></ErrorModal>
  // }
  // else if (userInput?.age.length === 0) {
  //   theErrorModal = <ErrorModal content='Age is empty' closeModal={closeModalHandler}></ErrorModal>
  // }

  console.log(userInput);

  return (
    <main>
      <AddUser onFormSubmit={submitFunction} />

      {userInput && <UsersList />}

      {theErrorModal}
      {/* {errorModal && <ErrorModal content='Name is empty' closeModal={closeModalHandler}></ErrorModal>} */}

    </main>
  )
}
export default App;
