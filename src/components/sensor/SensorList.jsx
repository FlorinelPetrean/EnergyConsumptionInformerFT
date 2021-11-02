import React from "react";
import Table from "../../commons/tables/table";
import SensorServices from "../../services/SensorServices";
import { Link } from 'react-router-dom';

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
    },
];

class SensorList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        };
        this.refreshSensors = this.refreshSensors.bind(this);
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

    setHyperlinks(tableData) {
        tableData.forEach(
            data => {
                data.id = <Link to={`/sensors/page/${data.id}`}>{data.id}</Link>;
                data.deviceId = <Link to={`/devices/page/${data.deviceId}`}>{data.deviceId}</Link>;
            }
        )
        return tableData
    }

    render() {
        if (this.state.tableData.length === 0)
            return(<div></div>)
        return (
            <Table
                data={this.setHyperlinks(this.state.tableData)}
                columns={columns}
                search={filters}
                pageSize={5}
            />
        )
    }
}

export default SensorList;