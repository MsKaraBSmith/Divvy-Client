import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styled from 'styled-components';
import APIURL from '../../helpers/environments';

const SignupDiv = styled.div `
    color: white;
    font-family: 'Josefin Sans', sans-serif;
    padding-top: 15%;
`;

const SignupButton = styled.button `
    background-color: #71B414;
`;


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: '',
            familyUsername: '',
            username: '',
            password: '',
            role: '',
          };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/register`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    groupName: this.state.groupName,
                    familyUsername: this.state.familyUsername,
                    username: this.state.username,
                    password: this.state.password,
                    role: 'admin',
                },
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            this.props.updateToken(data.sessionToken);
            this.props.isAdmin(data.user.role);
            console.log(data.sessionToken);
            localStorage.setItem("username", this.state.username);
            console.log(data);
        })
        .catch((error) => {
            console.log("Error", error);
        });
    };
    render() { 
        return ( 
            <SignupDiv>
            <h1>Signup</h1>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="groupName">Group Name</Label>
                    <Input onChange={(e) => this.setState({ groupName: e.target.value})}  name="groupName" value={this.state.groupName} type="text"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="familyUsername">Family Username</Label>
                    <Input onChange={(e) => this.setState({ familyUsername: e.target.value})}name="familyUsername" value={this.state.familyUsername} type="text"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => this.setState({ username: e.target.value})} name="username" value={this.state.username} type="email"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => this.setState({ password: e.target.value})} name="password" value={this.state.password} type="password"/>
                </FormGroup>
                {/* <FormGroup>
                    <Label htmlFor="role">Role</Label>
                    <Input onChange={(e) => this.setState({ role: e.target.value})} name="role" value={this.state.role}/>
                </FormGroup> */}
                <SignupButton type="submit">Signup</SignupButton>
            </Form>
        </SignupDiv> 
         );
    }
}

 
export default Signup;