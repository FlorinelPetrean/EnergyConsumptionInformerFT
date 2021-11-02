import React from 'react';
import DeviceForm from './DeviceForm';

function DeviceModify(props) {
    let type = "modify"
  return (
    <div>
      <DeviceForm user={null} device={props.location.state.device} type={type}/>
    </div>
  );
}

export default DeviceModify;