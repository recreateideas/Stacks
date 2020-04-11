import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from './propTypes';

const AuthenticatedRoute = (props) => {
    const {
        redirectUrl = '',
        skipGetUser,
        ...routeProps
    } = props;
    const isAuthenticated = true;
    return (
        isAuthenticated
            ? <Route {...routeProps} />
            : <Redirect to={redirectUrl} />
    );
};

AuthenticatedRoute.propTypes = propTypes;

export default AuthenticatedRoute;
