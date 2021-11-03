import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from './NavBar.module.css'
import {isAuthenticated} from '../utils/SessionStorage'
// import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'

class UserNavBar extends Component {

  render(){
    return (
      <header className={classes.header}>
        <div><Link className={classes.logo} to='/'>Energy Utility Platform App</Link> </div>
        <nav>
          <ul>
            <li>
              {!isAuthenticated() && (<Link to='/login'>Login</Link>)}
              {isAuthenticated() && (<Link to='/logout'>Logout</Link>)}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default UserNavBar;
