import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(url)
            })
    }
    return (
        <div className='text-center my-5 py-5'>
            <h2>Please Login</h2>
            <button className='btn btn-primary px-4' onClick={handleGoogleLogin}>Login</button>
        </div>
    );
};

export default Login;