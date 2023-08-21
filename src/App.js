import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
import ErrorModal from './components/ErrorModal/ErrorModal'

function App() {
  const [userInput, setUserInput] = useState(true)


  return (
    <main>
      <AddUser />

      {userInput && <UsersList />}

      {/* <ErrorModal content=''></ErrorModal> */}
    </main>
  )
}
export default App;
