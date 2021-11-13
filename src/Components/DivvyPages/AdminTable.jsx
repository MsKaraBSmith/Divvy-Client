import React from 'react';
import { Table, Button } from 'reactstrap';

const AdminTable = (props) => {
console.log(props.users)

    const deleteUser = (users) => {
        fetch(`http://localhost:3000/user/delete/${users.id}`, {
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
                    <th scope="row">{user.id}</th>
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
        <h3>Menus</h3>
        <hr />
        <Table striped>
        <thead>
            <tr>
                <th>#</th>
                <th> Group Name </th>
                <th> Family Username </th>
                <th> Username </th>
                <th> Password </th>
                <th> Role </th>
            </tr>
        </thead>
        <tbody>
            {userMapper()}
        </tbody>
        </Table>
        </>
     );
}
 
export default AdminTable;