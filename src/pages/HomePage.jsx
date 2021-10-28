import React, { Component } from 'react';
import {getUser} from '../utils/SessionStorage';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: getUser()
        }
    }


    render() {
        let user = this.state.user;
        return(
            <div>Hello {user.username}</div>
        )
    }
}
export default HomePage;