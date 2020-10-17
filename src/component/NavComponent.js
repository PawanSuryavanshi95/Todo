import React from 'react';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

const AuthNav = () => {
    const {isAuthenticated} = useAuth0();
    return(
        <Nav className="jusitfy-content-end">
            {isAuthenticated?<LogoutButton/>:<LoginButton/>}
        </Nav>
    )
}

const NavComponent = (props)=>{
    return(
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Todo App</NavbarBrand>
            <AuthNav/>
        </Navbar>
    )
}



export default NavComponent