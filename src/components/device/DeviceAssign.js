import React from 'react';
import DeviceForm from './DeviceForm';

function DeviceAssign(props) {
  let type = "assign"
  return (
    <div>
      <DeviceForm user={props.user} type={type}/>
    </div>
  );
}

export default DeviceAssign;