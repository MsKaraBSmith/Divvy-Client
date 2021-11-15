import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styled from 'styled-components';

const AdminSignupDiv = styled.div `
    color: white;
    margin-top: 65%;
    font-family: 'Josefin Sans', sans-serif;
`;

const AdminSignupButton = styled.button `
    background-color: #71B414;
    border: none;
    color: white;
    margin-top: 3%;
`;

class AdminSignup extends Component {
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
        fetch(`http://localhost:3000/user/register`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    groupName: this.state.groupName,
                    familyUsername: this.state.familyUsername,
                    username: this.state.username,
                    password: this.state.password,
                    role: this.state.role,
                },
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log("Error", error);
        });
    };
    render() { 
        return ( 
            <AdminSignupDiv>
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
                <FormGroup>
                    <Label htmlFor="role">Role</Label>
                    <Input type="select" name="role" onChange={(e) => this.setState({ role: e.target.value})} name="role" value={this.state.role}>
                        <option value="admin">Admin</option>
                        <option value="creator">Creator</option>
                        <option value="user">User</option>
                    </Input>
                </FormGroup>
                <AdminSignupButton type="submit" onClick={() => {window.location.reload();}}>Signup</AdminSignupButton>
            </Form>
        </AdminSignupDiv> 
         );
    }
}

 
export default AdminSignup;