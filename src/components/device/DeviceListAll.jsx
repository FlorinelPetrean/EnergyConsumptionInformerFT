import React from "react";
import DeviceServices from "../../services/DeviceServices";
import DeviceList from "./DeviceList";

class DeviceListAll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            devices: []
        };
        this.refreshDevices = this.refreshDevices.bind(this);
    }

    componentDidMount() {
        this.refreshDevices();
    }

    refreshDevices() {
        DeviceServices.getDevices()
            .then(
                response => {
                    console.log(response);
                    this.setState({ 
                        devices: response.data
                        
                    })
                }
            )
        

    }

    render() {  
        if(this.state.devices.length === 0)
            return (<div>LOADING ...</div>)    
        return (
            <div>
                <DeviceList tableData={this.state.devices}/>
            </div>
        )
    }
}
export default DeviceListAll;