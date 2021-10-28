import React from "react";
import Table from "../../commons/tables/table";
import DeviceServices from "../../services/DeviceServices";

const columns = [
    {
        Header: 'Username',
        accessor: 'username',
    },
    {
        Header: 'Description',
        accessor: 'description',
    },
    {
        Header: 'Max Energy Consumption',
        accessor: 'maxEnergyConsumption',
    },
    {
        Header: 'Average Energy Consumption',
        accessor: 'avgEnergyConsumption',
    },
    {
        Header: 'Sensor',
        accessor: 'sensorId',
    }
];

const filters = [
    {
        accessor: 'description',
    }
];

class DeviceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        };
        this.refreshUsers = this.refreshDevices.bind(this);
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
                        tableData: response.data
                        
                    })
                }
            )
        

    }

    render() {
        if (this.state.tableData.length === 0)
            return (<div>LOADING...</div>)
            
        return (
            <Table
                data={this.state.tableData}
                columns={columns}
                search={filters}
                pageSize={5}
            />
        )
    }
}

export default DeviceList;