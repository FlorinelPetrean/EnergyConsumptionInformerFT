import React from "react";
import Table from "../../commons/tables/table";
import UserServices from "../../services/UserServices";
import { Link } from 'react-router-dom';

const columns = [
     {
        Header: 'Username',
        accessor: 'username',
    },
    {
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },
   
    {
        Header: 'Address',
        accessor: 'address',
    },
    {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
    },
    {
        Header: 'Role',
        accessor: 'role',
    }
];

const filters = [
    {
        accessor: 'username',
    },
    {
        accessor: 'address',
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

    setHyperlinks(tableData) {
        tableData.forEach(
            data => {
                data.username = <Link to={`/users/page/${data.username}`}>{data.username}</Link>;
            }
        )
        return tableData
    }

    render() {
        if (this.state.tableData.length === 0)
            return (<div>LOADING...</div>)

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

export default UserList;