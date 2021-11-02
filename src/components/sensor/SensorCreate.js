import React from 'react';
import SensorForm from './SensorForm';

function SensorCreate(props) {
  let type = "create"
  return (
    <div>
      <h2>Sensor Create</h2>
      <SensorForm device={null} type={type} />
    </div>
  );
}

export default SensorCreate;