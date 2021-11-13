// import React, { Component } from 'react';

// import {Card, CardImg, CardText, CardTitle, CardSubtitle, CardBody, Button, CardDeck} from "reactstrap";

// class MenuCards extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <div>

//             </div>
//          );
//     }
// }
 
// export default MenuCards;

// import React from 'react';
// import { Table, Button } from 'reactstrap';

import React from 'react';
import { Table, Button } from 'reactstrap';

const MenuTable = (props) => {
console.log(props.menus)

    const deleteMenu = (menus) => {
        fetch(`http://localhost:3000/menu/delete/${menus.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token,
            })
        })
        .then(() => props.fetchMenus())
    }

    const menuMapper = () => {
        return props.menus.map((menu, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{menu.id}</th>
                    <td>{menu.date}</td>
                    <td>{menu.recipeTitle}</td>
                    <td>{menu.ingredientList}</td>
                    <td>{menu.recipeLink}</td>
                    <td>{menu.groupName}</td>
                    <td>{menu.familyUsername}</td>
                    {localStorage.getItem("user")==="admin" || localStorage.getItem("user")==="creator" ? (<>
                        <td>
                        <Button color="warning" onClick={() => { props.editUpdateMenus(menu); props.updateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteMenu(menu); }} >Delete</Button>
                        </td>
                    </>): null}
                   
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
                <th> Date </th>
                <th> Recipe Title </th>
                <th> Ingredient List </th>
                <th> Recipe Link </th>
                <th> Group Name </th>
                <th> Family Username </th>
            </tr>
        </thead>
        <tbody>
            {menuMapper()}
        </tbody>
        </Table>
        </>
     );
}
 
export default MenuTable;