import React, { Component } from 'react';
import {getUser} from '../utils/SessionStorage';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: getUser()
        }
        this.redirectUser = this.redirectUser.bind(this);
    }

    componentDidMount() {
        this.redirectUser();
    }

    redirectUser() {
        this.props.history.push(`/users/page/${this.state.user.username}`);
    }


    render() {
        let user = this.state.user;
        return(
            <h2>Hello {user.username}</h2>
        )
    }
}
export default Dashboard;