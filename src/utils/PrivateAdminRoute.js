import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAdmin, isAuthenticated, } from './SessionStorage';

const PrivateAdminRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            (isAuthenticated() && isAdmin()) ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateAdminRoute;