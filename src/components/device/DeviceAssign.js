import React from 'react';
import DeviceForm from './DeviceForm';

function DeviceAssign(props) {
  return (
    <div>
      <DeviceForm user={props.user}/>
    </div>
  );
}

export default DeviceAssign;