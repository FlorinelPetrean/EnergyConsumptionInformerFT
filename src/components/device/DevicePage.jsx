import React from "react";
import SensorAssign from "../sensor/SensorAssign";
import DeviceServices from "../../services/DeviceServices";
import SensorServices from "../../services/SensorServices";

class DevicePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            device: null,
            sensor: null,
        }
        this.getDevice = this.getDevice.bind(this)
        this.getSensor = this.getSensor.bind(this)

    }

    async componentDidMount() {
        await this.getDevice();
        this.getSensor();
    }

    async getDevice() {
        await DeviceServices.getDevice(this.state.id)
            .then(
                response => {
                    this.setState({device : response.data})
                }
            )
    }

    getSensor() {
        if(this.state.device !== null && this.state.device.sensorId != null) {
            SensorServices.getSensor(this.state.device.sensorId)
                .then(
                    response => {
                        this.setState({sensor : response.data})
                    }
                )
        }
    }

    sensorPageClicked(sensorId) {
        this.props.history.push(`/sensors/page/${sensorId}`);
    }

    modifyDeviceClicked(device) {
        this.props.history.push("/devices/modify", {device: device});
    }

    render() {
        let {device} = this.state;
        if (device === null)
            return(<div></div>);
        let sensor = this.state.sensor;
        return (
            <div>
               
                <div>
                    <h2>Device Details</h2>
                    <div>Description: {device.description}</div>
                    <div>User: {device.username}</div>
                    <div>Address: {device.address}</div>
                    <div>Maximum Energy Consumption: {device.maxEnergyConsumption}</div>
                    <div>Average Energy Consumption: {device.avgEnergyConsumption}</div>
                    <button className="btn btn-success" onClick={() => this.modifyDeviceClicked(device)}>Modify</button>
                </div>
                <div>
                    <h2>Assign Sensor</h2>
                    <SensorAssign device={device}/>
                </div>

                <div>
                    <h2>Sensor</h2>
                    {sensor !==null && <button className="btn btn-success" onClick={() => this.sensorPageClicked(sensor.id)}>Details</button>}
                </div>


            </div>
        )
    }
}
export default DevicePage;