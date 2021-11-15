import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environments';
import styled from 'styled-components';

const AdminTableStyle = styled.table `
    border: 5px solid limegreen;
    border-collapse: collapse;
    align-content: center;
    background-color: white;
    margin-bottom: 30%;
    margin-left: 20%;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
`;

const AdminTableHeader = styled.h3 `
    margin-top: 30%;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 40px;
    color: white;
    margin-left: 20%;
`;

const AdminTable = (props) => {
console.log(props.users)

    const deleteUser = (users) => {
        fetch(`${APIURL}/user/delete/${users.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token,
            })
        })
        .then(() => props.fetchUsers())
    }

    const userMapper = () => {
        return props.users.map((user, index) => {
            return(
                <tr key={index}>
                    {/* <th scope="row">{user.id}</th> */}
                    <td>{user.groupName}</td>
                    <td>{user.familyUsername}</td>
                    <td>{user.username}</td>
                    {/* <td>{user.password}</td> */}
                    <td>{user.role}</td>
                    <td>
                        <Button color="warning" onClick={() => { props.editUpdateUsers(user); props.userUpdateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteUser(user); }} >Delete</Button>
                    </td>
                </tr>
            )
        })
    };

    return ( 
        <>
        <AdminTableHeader>Users</AdminTableHeader>
        <AdminTableStyle>
        <thead>
            <tr>
                {/* <th>#</th> */}
                <th> Group Name </th>
                <th> Family Username </th>
                <th> Username </th>
                {/* <th> Password </th> */}
                <th> Role </th>
            </tr>
        </thead>
        <tbody>
            {userMapper()}
        </tbody>
        </AdminTableStyle>
        </>
     );
}
 
export default AdminTable;