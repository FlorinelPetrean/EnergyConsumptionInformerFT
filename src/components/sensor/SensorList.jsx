import React from "react";
import Table from "../../commons/tables/table";
import SensorServices from "../../services/SensorServices";

const columns = [
    {
        Header: 'Id',
        accessor: 'id',
    },
    {
        Header: 'Description',
        accessor: 'description',
    },
    {
        Header: 'Maximum Value',
        accessor: 'maxValue',
    },
    {
        Header: 'Device Id',
        accessor: 'deviceId'
    },
];

const filters = [
    {
        accessor: 'description',
    }
];

class SensorList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        };
        this.refreshUsers = this.refreshSensors.bind(this);
    }

    componentDidMount() {
        this.refreshSensors();
    }

    refreshSensors() {
        SensorServices.getSensors()
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

export default SensorList;