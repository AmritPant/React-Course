import React, { useState, Fragment } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUserList => [
      ...prevUserList,
      { name: uName, age: uAge, id: uName },
    ]);
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
