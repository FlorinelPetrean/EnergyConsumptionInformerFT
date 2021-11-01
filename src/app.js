import React from 'react'
import {BrowserRouter , Switch} from 'react-router-dom'
import UserForm from './components/user/UserForm';
import UserList from './components/user/UserList';
import DeviceListAll from './components/device/DeviceListAll';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Layout from './layout/Layout';
import SensorList from './components/sensor/SensorList';
import DeviceCreate from './components/device/DeviceCreate';
import SensorCreate from './components/sensor/SensorCreate';
import UserPage from './components/user/UserPage';

class App extends React.Component {


    render() {

        return (
            <BrowserRouter>
        <Switch>
            <PublicRoute restricted={true} path="/login" exact component={LoginPage} />
            <PublicRoute restricted={true }path="/register" exact component={UserForm}/>
            <PrivateRoute path="/logout" exact component={LogoutPage} />
            <Layout>
              <PrivateRoute restricted={false} exact path="/" component={HomePage} />

              <PrivateRoute path="/devices/form"  exact component={DeviceCreate}/>
              <PrivateRoute path="/devices/list"  exact component={DeviceListAll}/>

              <PrivateRoute path="/sensors/form" exact component={SensorCreate}/>
              <PrivateRoute path="/sensors/list" exact component={SensorList}/>

              <PrivateRoute path="/users/page/:username" exact component={UserPage}/>
              <PrivateRoute path="/users/form" exact component={UserForm}/>
              <PrivateRoute path="/users/list" exact component={UserList}/>
             
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
            </Layout>

        </Switch>
    </BrowserRouter>
        )
    };
}

export default App
