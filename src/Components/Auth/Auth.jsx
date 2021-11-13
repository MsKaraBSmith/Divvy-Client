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
`;

const Auth = (props) => {



    return (
        <DivvyBackground>
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