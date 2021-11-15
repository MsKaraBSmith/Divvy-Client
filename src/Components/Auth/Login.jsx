import React, { Component } from 'react';
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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
         };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({user:{
                username: this.state.username, 
                password: this.state.password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken);
            this.props.isAdmin(data.user.role);
            console.log(data);
            console.log(data.user.role)
        }).catch(err => {
            alert("failed to login");
            console.log(err)
        })
    }


    render() {
        return (
        <LoginDiv>
            <h1>Login</h1>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => this.setState({ username: e.target.value})} name="username" value={this.state.username} type="email"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => this.setState({ password: e.target.value})} name="password" value={this.state.password} type="password"/>
                </FormGroup>
                <LoginButton type="submit">Login</LoginButton>
            </Form>
        </LoginDiv>
     );
    }
}
 
export default Login;