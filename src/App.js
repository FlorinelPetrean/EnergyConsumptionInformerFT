import React from 'react'
import {BrowserRouter , Switch} from 'react-router-dom'
import UserList from './components/user/UserList';
import DeviceListAll from './components/device/DeviceListAll';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import PrivateAdminRoute from './utils/PrivateAdminRoute';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Layout from './layout/Layout';
import SensorList from './components/sensor/SensorList';
import DeviceCreate from './components/device/DeviceCreate';
import SensorCreate from './components/sensor/SensorCreate';
import UserPage from './components/user/UserPage';
import DevicePage from './components/device/DevicePage';
import SensorPage from './components/sensor/SensorPage';
import UserCreate from './components/user/UserCreate';
import UserModify from './components/user/UserModify';
import SensorModify from './components/sensor/SensorModify';
import DeviceModify from './components/device/DeviceModify';

class App extends React.Component {


    render() {

        return (
            <BrowserRouter>
        <Switch>
            <PublicRoute restricted={true} path="/login" exact component={LoginPage} />
            <PublicRoute restricted={true }path="/register" exact component={UserCreate}/>
            <PrivateRoute path="/logout" exact component={LogoutPage} />
            <Layout>
              <PrivateRoute restricted={false} exact path="/" component={HomePage} />

              <PrivateRoute path="/devices/page/:id"  exact component={DevicePage}/>
              <PrivateAdminRoute path="/devices/form"  exact component={DeviceCreate}/>
              <PrivateAdminRoute path="/devices/modify"  exact component={DeviceModify}/>
              <PrivateAdminRoute path="/devices/list"  exact component={DeviceListAll}/>

              <PrivateRoute path="/sensors/page/:id"  exact component={SensorPage}/>
              <PrivateAdminRoute path="/sensors/form" exact component={SensorCreate}/>
              <PrivateAdminRoute path="/sensors/modify" exact component={SensorModify}/>
              <PrivateAdminRoute path="/sensors/list" exact component={SensorList}/>

              <PrivateRoute path="/users/page/:username" exact component={UserPage}/>
              <PrivateAdminRoute path="/users/form" exact component={UserCreate}/>
              <PrivateAdminRoute path="/users/modify" exact component={UserModify}/>
              <PrivateAdminRoute path="/users/list" exact component={UserList}/>
             
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
            </Layout>

        </Switch>
    </BrowserRouter>
        )
    };
}

export default App
