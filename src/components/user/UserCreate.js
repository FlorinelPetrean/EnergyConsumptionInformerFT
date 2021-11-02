import React from 'react';
import UserForm from './UserForm';

function UserCreate(props) {
  return (
    <div>
      <h2>User Create</h2>
      <UserForm user={null}/>
    </div>
  );
}

export default UserCreate;