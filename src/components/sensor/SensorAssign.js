import React from 'react';
import SensorForm from './SensorForm';

function SensorAssign(props) {
  let type = "assign"
  return (
    <div>
      <SensorForm device={props.device} type={type}/>
    </div>
  );
}

export default SensorAssign;