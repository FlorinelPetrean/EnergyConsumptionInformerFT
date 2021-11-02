import React from 'react';
import SensorForm from './SensorForm';

function SensorModify(props) {
    let type = "modify"
    return (
        <div>
        <SensorForm device={null} sensor={props.location.state.sensor} type={type}/>
        </div>
    );
}

export default SensorModify;