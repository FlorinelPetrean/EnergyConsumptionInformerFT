import React from "react";
import Table from "../../commons/tables/table";
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
        Header: 'User',
        accessor: 'username',
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
        Header: 'Sensor Id',
        accessor: 'sensorId',
    }
];

const filters = [
    {
        accessor: 'description',
    },

];

class DeviceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: props.tableData
        };
    }


    setHyperlinks(tableData) {
        tableData.forEach(
            data => {
                data.id = <Link to={`/devices/page/${data.id}`}>{data.id}</Link>;
                data.sensorId = <Link to={`/sensors/page/${data.sensorId}`}>{data.sensorId}</Link>;
                if(data.username !== null)
                    data.username = <Link to={`/users/page/${data.username}`}>{data.username}</Link>;
                else {
                    data.username = "TEMPLATE"
                    data.sensorId = "TEMPLATE"
                    data.maxEnergyConsumption = "TEMPLATE"
                    data.avgEnergyConsumption = "TEMPLATE"
                }

            }
        )
        return tableData
    }

    render() {
            
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

export default DeviceList;