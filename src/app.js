import React from 'react'
import {BrowserRouter , Switch} from 'react-router-dom'
import DeviceList from './components/device/DeviceList';
import UserForm from './components/user/UserForm';
import UserList from './components/user/UserList';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Layout from './layout/Layout';

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

              {/* <PrivateRoute path="/devices/form"  exact component={DeviceForm}/> */}
              <PrivateRoute path="/devices/list"  exact component={DeviceList}/>
        
              

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
