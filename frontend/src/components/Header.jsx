import React from 'react'
import {Navbar, Nav, Container, NavDropdown, Badge} from 'react-bootstrap'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    const {userInfo} = useSelector((state) =>state.auth)

  return (
    <header>
        <Navbar bg='dark' variant='dark' expand= 'lg' collapseOnSelect>
            <Container>
                <LinkContainer to={'/'}>
                    <Navbar.Brand>MERN Auth</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        {userInfo ? 
                        (
                        <>
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to={'/profile'}>
                                    <NavDropdown.Item>
                                        Profile
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to={'/logout'}>
                                    <NavDropdown.Item>
                                        Logout
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </>) : (
                            <>
                                <LinkContainer to={'/signIn'}>
                            <Nav.Link>
                                <FaSignInAlt/>Sign In
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/register'}>
                                <Nav.Link>
                                    <FaSignOutAlt/>Sign up
                                </Nav.Link> 
                            </LinkContainer>
                            </>
                        )}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </header>
  )
}

export default Header