import React from "react";
import DeviceAssign from "../device/DeviceAssign";
import UserServices from "../../services/UserServices";
import DeviceListUser from "../device/DeviceListUser";
import { isAdmin } from "../../utils/SessionStorage";

class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: props.match.params.username,
            user: null,
            totalEnergy: 0,
            device: null,
        }

    }

    async componentDidMount() {
        await this.getUser();
        this.getTotalEnergy();
    }

    async getUser() {
        await UserServices.getUserByUsername(this.state.username)
            .then(
                response => {
                    this.setState({user : response.data})
                }
            )
    }

    getTotalEnergy() {
        UserServices.getTotalEnergy(this.state.username)
            .then(
                response => {
                    this.setState({totalEnergy : response.data})
                }
            )
    }

    modifyUserClicked(user) {
        this.props.history.push("/users/modify", {user: user});
    }

    deleteUserClicked(user) {
        this.props.history.push("/users/list");
        UserServices.deleteUserById(user.id);
    }

    render() {
        let {totalEnergy, user} = this.state;
        if (user === null)
            return(<div></div>);
        return (
            <div>
               
                <div>
                    <h2>User Details</h2>
                    <div>Username: {user.username}</div>
                    <div>Name: {user.firstName + ' ' + user.lastName}</div>
                    <div>Address: {user.address}</div>
                    <div>Date of Birth: {user.dateOfBirth}</div>
                    <div>Role: {user.role}</div>
                    <button className="btn btn-success" onClick={() => this.modifyUserClicked(user)}>Modify</button>
                </div>

                { isAdmin() &&
                <div>
                    <h2>Assign Device</h2>
                    <DeviceAssign user={user}/>
                </div>
                }

                <div>
                    <h2>Device List</h2>
                    <DeviceListUser username={user.username}/>
                    <div>Total Energy Consumption: {totalEnergy}</div>
                </div>
                
                { isAdmin() &&
                <div>
                    <h2>Delete User</h2>
                    <button className="btn btn-warning" onClick={() => this.deleteUserClicked(user)}>Delete</button>
                </div>
                }


            </div>
        )
    }
}
export default UserPage;