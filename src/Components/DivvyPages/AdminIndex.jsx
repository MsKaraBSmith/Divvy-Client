import React, { Component } from 'react';
import AdminSignup from './AdminSignup';
import AdminTable from './AdminTable';
import { Container, Row, Col } from 'reactstrap';
import AdminEdit from './AdminEdit';
<<<<<<< HEAD
import styled from "styled-components";
import background4 from '../Assets/pexels-lukas-616404.jpg';

const AdminBackground = styled.div `
  background-image: url(${background4});
  background-size: cover;
`;
=======
import APIURL from '../../helpers/environments';
>>>>>>> 33a8f7d678d7a4849d20285498c6dde16c962d9c


class AdminIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [],
            userUpdateActive: false,
            userToUpdate: {},
         };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers= () => {
        fetch(`${APIURL}/user/`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': this.props?.token ?? localStorage.getItem("token"),
            }),
        })
        .then((res) => res.json())
        .then((userData) => {
            this.setState({ users: userData });
            console.log(userData)
        });
    };

    editUpdateUsers = (users) => {
        this.setState({
            userToUpdate: users
        })
    };

    userUpdateOn = () => {
        this.setState({
            userUpdateActive: true
        })
    };
  
    userUpdateOff = () => {
        this.setState({
            userUpdateActive: false
        })
    };

    render() { 
        return (
            <AdminBackground>
            <Container className="admin-signup">
            <Row>
                <Col md='4'>
                    <AdminSignup updateToken={this.props.updateToken} />
                </Col>
                <Col md='8' className='admin-table'>
                    <AdminTable users={this.state.users} editUpdateUsers={this.editUpdateUsers.bind(this)} userUpdateOn={this.userUpdateOn.bind(this)} fetchUsers={this.fetchUsers.bind(this)} token={this.props.token} />
                </Col>
                {this.state.userUpdateActive ?
                <AdminEdit userToUpdate={this.state.userToUpdate} userUpdateOff={this.userUpdateOff.bind(this)} fetchUsers={this.fetchUsers.bind(this)} token={this.props.token} />
                : <></>}
            </Row>
        </Container>
        </AdminBackground>
         );
    }
}
 
export default AdminIndex;