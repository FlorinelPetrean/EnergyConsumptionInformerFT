import React from "react";
import Table from "../../commons/tables/table";
import UserServices from "../../services/UserServices";

const columns = [
    {
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Header: 'Username',
        accessor: 'username',
    },
    {
        Header: 'Address',
        accessor: 'address',
    },
    {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
    }
];

const filters = [
    {
        accessor: 'username',
    }
];

class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        };
        this.refreshUsers = this.refreshUsers.bind(this);
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        UserServices.getUsers()
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

export default UserList;