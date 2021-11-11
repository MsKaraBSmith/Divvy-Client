import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuIndex from './MenuIndex';
import ShoppingIndex from './ShoppingIndex';

const DivvyNav = (props) => {
    console.log(props.token, "This is coming from DivvyNav");
    return (
        <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                Home
            </NavbarBrand>
            <Nav className="ml-auto">
                <NavItem>
                    <Link to="/menu" className="site-link">Menus</Link>
                </NavItem>
                <NavItem>
                    <Link to="/shopping" className="site-link">Shopping Lists</Link>
                </NavItem>
            </Nav>
        </Navbar>
                    <Switch>
                    <Route exact path="/menu"><MenuIndex token={props.token} /></Route>
                    <Route exact path="/shopping"><ShoppingIndex token={props.token} /></Route>
                    </Switch>
        </div>
    );
};

export default DivvyNav;