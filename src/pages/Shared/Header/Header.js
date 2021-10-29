import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, signInUsingGoogle, logOut } = useAuth();
    const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='text-decoration-none text-white fs-4' to='/'>Ural Travels</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">

                        <Link className='text-decoration-none text-white px-3' to='/'><p>Home</p></Link>
                        <Link className='text-decoration-none text-white px-3' to='/contact'><p>Contacts Us</p></Link>
                        <Link className='text-decoration-none text-white px-3' to='/about'><p>About</p></Link>
                        {user.email && <Link className='text-decoration-none text-white px-3' to='/myOrder'><p>My Order</p></Link>}
                        <Navbar.Text>
                            <p className='text-white me-4'> <span className='text-danger'>{userIcon}</span> {user.displayName} </p>
                        </Navbar.Text>
                        {
                            user.email ? <button className='btn btn-primary px-3' onClick={logOut}>Log Out</button> : <button className='btn btn-primary px-3' onClick={signInUsingGoogle}>Login</button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;