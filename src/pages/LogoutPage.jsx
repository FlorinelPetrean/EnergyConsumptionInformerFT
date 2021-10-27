import React, {Component } from 'react';
import {removeUserSession} from '../utils/SessionStorage';


class LogoutPage extends Component {

    constructor(props) {
        super(props)
        this.logoutUser = this.logoutUser.bind(this)
    }

    componentDidMount(){
        this.logoutUser();
    }

    logoutUser() {
        removeUserSession();
        this.props.history.push(`/login`);
    }


    render(){
        return(
            <div></div>
        )
    }

}
export default LogoutPage;