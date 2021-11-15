import React from 'react';
import Signup from './Signup';
import Login from './Login';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import background1 from '../Assets/pexels-pixabay-54455.jpg';

const DivvyBackground = styled.div `
  background-image: url(${background1});
  background-size: cover;
  height: 1000px;
  /* width: 100vw; */
`;

const DivvyWelcome = styled.p `
    color: white;
    font-size: 800%;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
`;

const DivvyTagline = styled.p `
    color: white;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    margin-top: -60px;
    font-size: medium;
`

const Auth = (props) => {



    return (
        <DivvyBackground>
            <DivvyWelcome>Divvy</DivvyWelcome>
            <DivvyTagline>Lighten the load by sharing it.</DivvyTagline>
        <Container className="auth-container">
            <Row>
                <Col md='6'>
                    <Signup updateToken={props.updateToken} isAdmin={props.isAdmin} />
                </Col>
                <Col md='6' className='login-col'>
                    <Login updateToken={props.updateToken} isAdmin={props.isAdmin} />
                </Col>
            </Row>
        </Container>
        </DivvyBackground> 
     );
}
 
export default Auth;