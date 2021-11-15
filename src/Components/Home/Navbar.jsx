import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';
import styled from 'styled-components';

const NavDiv = styled.div `
    z-index: 100;
`;

const LogoutButton = styled.button `
    background-color: #71B414;
    color: white;
    font-family: 'Josefin Sans', sans-serif;
    border: none;
    text-align: center;
    
`;


const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen =!isOpen;
        setIsOpen(newIsOpen);
    }

    return ( 
        <NavDiv>
        <Navbar color="success" light expand="md">
            <NavbarBrand href="/">Divvy</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <LogoutButton onClick={props.clickLogout}>Logout</LogoutButton>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </NavDiv>
        
     );
}
 
export default Sitebar;