import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from './NavBar.module.css'
import {isAuthenticated} from '../utils/SessionStorage'
// import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css'

class NavBar extends Component {

  render(){
    return (
      <header className={classes.header}>
        <div><Link className={classes.logo} to='/'>Energy Utility Platform App</Link> </div>
        <nav>
          <ul>
            {/* <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li> */}

            <li>
              <NavDropdown title="Users" id="basic-nav-dropdown" bg="green">
                <NavDropdown.Item  href="/users/list">List</NavDropdown.Item>
                <NavDropdown.Item href="/users/form">Create</NavDropdown.Item>
              </NavDropdown>
            </li>

            <li>
              <NavDropdown title="Devices" id="basic-nav-dropdown">
                <NavDropdown.Item href="/devices/list">List</NavDropdown.Item>
                <NavDropdown.Item href="/devices/form">Create</NavDropdown.Item>
              </NavDropdown>
            </li>

            <li>
              <NavDropdown title="Sensors" id="basic-nav-dropdown">
                <NavDropdown.Item href="/sensors/list">List</NavDropdown.Item>
                <NavDropdown.Item href="/sensors/form">Create</NavDropdown.Item>
              </NavDropdown>
            </li> 

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
export default NavBar;
