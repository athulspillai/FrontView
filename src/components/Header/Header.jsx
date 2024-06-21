import React from 'react'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/logo2.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to='https://primefresh.app/' className="navbar-brand">
                        <img src={logo} alt='' />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-5">
                            <Nav.Link className='mx-4' as={Link} to="/">
                                HOME
                            </Nav.Link>
                            <Nav.Link className='mx-4' as={Link} to="/aboutus">
                                ABOUT US
                            </Nav.Link>
                            <Nav.Link className='mx-4' as={Link} to="/products">
                                PRODUCTS
                            </Nav.Link>
                            <Nav.Link className='mx-4' as={Link} to="/contactus">
                                CONTACT US
                            </Nav.Link>
                            <Nav.Link className='mx-4' as={Link} to="/login">
                                LOGIN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header