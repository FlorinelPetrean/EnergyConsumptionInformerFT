import React from "react";
import SensorServices from "../../services/SensorServices";
import { isAdmin } from "../../utils/SessionStorage";
import RecordChart from "../record/RecordChart";
import RecordForm from "../record/RecordForm";
import RecordList from "../record/RecordList";
import { Link } from 'react-router-dom';

class SensorPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            sensor: null,
        }

    }

    componentDidMount() {
        this.getSensor();
    }

    getSensor() {
        SensorServices.getSensor(this.state.id)
            .then(
                response => {
                    this.setState({sensor : response.data})
                }
            )
    }

    modifySensorClicked(sensor) {
        this.props.history.push("/sensors/modify", {sensor: sensor});
    }

    deleteSensorClicked(sensor) {
        this.props.history.push("/sensors/list");
        SensorServices.deleteSensorById(sensor.id);
    }

    render() {
        let {sensor} = this.state;
        if (sensor === null)
            return(<div></div>);
        return (
            <div>
               
                <div>
                    <h2>Sensor Details</h2>
                    <div>Description: {sensor.description}</div>
                    <div>Maximum Value: {sensor.maxValue}</div>
                    <div>Device Id: {<Link to={`/devices/page/${sensor.deviceId}`}>{sensor.deviceId}</Link>}</div>
                    <button className="btn btn-success" onClick={() => this.modifySensorClicked(sensor)}>Modify</button>
                </div>
                

                { isAdmin() &&
                <div>
                    <h2>Generate Records</h2>
                    <RecordForm sensorId={sensor.id}/>
                </div>
                 }

                <div>
                    <h2>Sensor Records</h2>
                    <RecordList sensorId={sensor.id}/>
                </div>

                <div>
                    <h2>Records Chart</h2>
                    <RecordChart sensorId={sensor.id}/>
                </div>

                { isAdmin() &&
                <div>
                    <h2>Delete Sensor</h2>
                    <button className="btn btn-warning" onClick={() => this.deleteSensorClicked(sensor)}>Delete</button>
                </div>
                }


            </div>
        )
    }
}
export default SensorPage;