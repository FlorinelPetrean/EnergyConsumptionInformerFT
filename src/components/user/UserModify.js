import React from 'react';
import UserForm from './UserForm';

function UserModify(props) {
  return (
    <div>
        <h2>User Modify</h2>
      <UserForm user={props.location.state.user}/>
    </div>
  );
}

export default UserModify;