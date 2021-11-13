// import React, { useState } from 'react';
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// const Signup = (props) => {
//     const [groupName, setGroupName] = useState('');
//     const [familyUsername, setFamilyUsername] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         fetch( `http://localhost:3000/user/register` , {
//             method: 'POST',
//             body: JSON.stringify({user:{groupName: groupName, familyUsername: familyUsername, username: username, password: password, role: role}}),
//             headers: new Headers ({
//                 'Content-Type': 'application/json'
//             })
//         }).then(
//             (response) => response.json()
//         ).then((data) => {
//             props.updateToken(data.sessionToken)
//             // props.updateId(data.ID)
//             console.log(data.sessionToken)
//         })
//     };

//     return ( 
//         <div>
//             <h1>Signup</h1>
//             <Form onSubmit={handleSubmit}>
//                 <FormGroup>
//                     <Label htmlFor="groupName">Group Name</Label>
//                     <Input onChange={(e) => setGroupName(e.target.value)}  name="groupName" value={groupName} type="text"/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="familyUsername">Family Username</Label>
//                     <Input onChange={(e) => setFamilyUsername(e.target.value)} name="familyUsername" value={familyUsername} type="text"/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="username">Username</Label>
//                     <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} type="email"/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="password">Password</Label>
//                     <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} type="password"/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="role">Role</Label>
//                     <Input onChange={(e) => setRole(e.target.value)} name="role" value={role}/>
//                 </FormGroup>
//                 <Button type="submit">Signup</Button>
//             </Form>
//         </div>
//      );
// };

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
        fetch(`http://localhost:3000/user/register`, {
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
            this.props.isAdmin(data.user.role)
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
            <div>
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
                <Button type="submit">Signup</Button>
            </Form>
        </div> 
         );
    }
}

 
export default Signup;