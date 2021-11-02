import React, { Component } from 'react';
import UserPage from '../components/user/UserPage';
import {getUser} from '../utils/SessionStorage';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: getUser()
        }
    }


    render() {
        let user = this.state.user;
        return(
            <h2>Hello {user.username}</h2>
        )
    }
}
export default Dashboard;