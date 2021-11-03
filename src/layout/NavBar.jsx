import React, { Component } from "react";
import {isAdmin} from '../utils/SessionStorage'
// import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminNavBar from "./AdminNavBar";
import UserNavBar from "./UserNavBar";

class NavBar extends Component {

  render(){
    if(isAdmin() === true) {
      return (
        <AdminNavBar/>
      )
    }
    return (
      <UserNavBar/>
    );
  }
}
export default NavBar;
