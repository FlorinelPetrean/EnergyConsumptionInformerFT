import React from "react";
import SensorServices from "../../services/SensorServices";
import RecordForm from "../record/RecordForm";
import RecordList from "../record/RecordList";

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
                    <button className="btn btn-success" onClick={() => this.modifySensorClicked(sensor)}>Modify</button>
                </div>
                

                <div>
                    <h2>Generate Records</h2>
                    <RecordForm sensorId={sensor.id}/>
                </div>

                <div>
                    <h2>Sensor Records</h2>
                    <RecordList sensorId={sensor.id}/>
                </div>


            </div>
        )
    }
}
export default SensorPage;