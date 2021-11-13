import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';
import styled from 'styled-components';

const NavDiv = styled.div `
    z-index: 100;
`

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
                    <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </NavDiv>
        
     );
}
 
export default Sitebar;