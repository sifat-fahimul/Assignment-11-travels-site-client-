import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {


    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{
                pathname: '/login',
                state: { from: location }
            }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;