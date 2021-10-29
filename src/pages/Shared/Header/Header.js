import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
                        <Navbar.Text>
                            <p> Signed in as: <a href="#login">Mark Otto</a></p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;