import React from 'react';
import DeviceForm from './DeviceForm';

function DeviceCreate(props) {
  let type = "create"
  return (
    <div>
      <h2>Device Create</h2>
      <DeviceForm user={null} type={type}/>
    </div>
  );
}

export default DeviceCreate;