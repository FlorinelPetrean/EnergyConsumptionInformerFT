import React from "react";
import Table from "../../commons/tables/table";
import SensorServices from "../../services/SensorServices";

const columns = [
    {
        Header: 'Id',
        accessor: 'id',
    },
    {
        Header: 'Timestamp',
        accessor: 'timestamp',
    },
    {
        Header: 'Energy Consumption',
        accessor: 'energyConsumption',
    },
];

const filters = [
    {
        accessor: 'timestamp',
    },
];

class RecordList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.sensorId,
            tableData: [],
            chartData: []
        };
        this.refreshSensors = this.refreshRecords.bind(this);
    }

    componentDidMount() {
        this.refreshRecords();
    }

    refreshRecords() {
        SensorServices.getSensorRecords(this.state.id)
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
            return(<div>None</div>)
        return (
            <div>
            <Table
                data={this.state.tableData}
                columns={columns}
                search={filters}
                pageSize={5}
            />
        </div>
        )
    }
}

export default RecordList;