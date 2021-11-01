import React from 'react';
import SensorForm from './SensorForm';

function SensorAssign(props) {
  return (
    <div>
      <SensorForm device={props.device}/>
    </div>
  );
}

export default SensorAssign;