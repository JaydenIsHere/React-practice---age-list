import React, { useState } from 'react';
import UserForm from './newUser/UserForm';
import UsersList from './users/UsersList';

function App() {

  const [allUsers,setAllusers] = useState([])

  const updateAllUsers = (enteredInfo) =>{
    setAllusers(prev => {
    return [...prev,enteredInfo]
    })
  }

  return (
    <div>
<UserForm updateAllUsers={updateAllUsers}/>

<UsersList users={allUsers}/>
    </div>
  );
}
export default App;
