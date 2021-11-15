import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styled from 'styled-components';

const LoginDiv = styled.div `
    color: white;
    font-family: 'Josefin Sans', sans-serif;
    padding-top: 15%;
`;

const LoginButton = styled.button `
    background-color: #71B414;
`;

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
            props.isAdmin(data.user.role);
            console.log(data);
            console.log(data.user.role)
        }).catch(err => {
            alert("failed to login");
            console.log(err)
        })
    }

    return ( 
        <LoginDiv>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <LoginButton type="submit">Login</LoginButton>
            </Form>
        </LoginDiv>
     );
}
 
export default Login;