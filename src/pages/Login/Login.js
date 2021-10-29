import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <button className='btn btn-primary px-4' onClick={signInUsingGoogle}>Login</button>
        </div>
    );
};

export default Login;