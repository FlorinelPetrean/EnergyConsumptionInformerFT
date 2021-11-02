import React from "react";
import UserServices from "../../services/UserServices";
import DeviceList from "./DeviceList";

class DeviceListUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            devices: []
        };
        this.refreshDevices = this.refreshDevices.bind(this);
    }

    componentDidMount() {
        this.refreshDevices();
    }

    refreshDevices() {
        UserServices.getUserDevices(this.state.username)
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
            return (<div>None</div>)    
        return (
            <div>
                <DeviceList tableData={this.state.devices}/>
            </div>
        )
    }
}
export default DeviceListUser;