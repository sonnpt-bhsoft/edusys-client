import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../actions'

const Header = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(signOut())
    }

    const renderLoggedInLink = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" style={{ cursor: 'pointer'}} onClick={logOut}>Log out</span>
                </li>
            </Nav>
        )
    }

    const renderNonLoggedInLink = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to="login" className="nav-link">Log in</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="register" className="nav-link">Register</NavLink>
                </li>
            </Nav>
        )

    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">EduSys</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
                    </Nav>
                {auth.authenticate ? renderLoggedInLink() : renderNonLoggedInLink()}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header