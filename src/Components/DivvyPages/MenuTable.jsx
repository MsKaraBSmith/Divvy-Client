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
import styled from 'styled-components';
import moment from 'moment';

const MenuTableStyle = styled.table `
    border: 5px solid limegreen;
    border-collapse: collapse;
    align-content: center;
    background-color: white;
    margin-bottom: 30%;
    margin-left: 20%;
    font-family: 'Josefin Sans', sans-serif;
`;

const MenuTableHeader = styled.h3 `
    margin-top: 10%;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 40px;
    color: white;
    margin-left: 20%;
`;

const MenuTD = styled.td `
    border-top: 3px solid red;
    /* padding: 8px; */
`;

const MenuTH= styled.th `
    border-bottom: 3px solid red;
`;

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
                    {/* <th scope="row">{menu.id}</th> */}
                    <MenuTD>{moment(menu.date).format("L")}</MenuTD>
                    <MenuTD>{menu.recipeTitle}</MenuTD>
                    <MenuTD>{menu.ingredientList}</MenuTD>
                    <MenuTD><a href={menu.recipeLink} target="_blank">{menu.recipeLink}</a></MenuTD>
                    <MenuTD>{menu.groupName}</MenuTD>
                    <MenuTD>{menu.familyUsername}</MenuTD>
                    {localStorage.getItem("user")==="admin" || localStorage.getItem("user")==="creator" ? (<>
                        <MenuTD>
                        <Button color="warning" onClick={() => { props.editUpdateMenus(menu); props.updateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteMenu(menu); }} >Delete</Button>
                        </MenuTD>
                    </>): null}
                   
                </tr>
            )
        })
    };

    return ( 
        <>
        <MenuTableHeader>Menus</MenuTableHeader>
        <MenuTableStyle>
        <thead>
            <tr>
                {/* <th>#</th> */}
                <MenuTH> Date </MenuTH>
                <MenuTH> Recipe Title </MenuTH>
                <MenuTH> Ingredient List </MenuTH>
                <MenuTH> Recipe Link </MenuTH>
                <MenuTH> Group Name </MenuTH>
                <MenuTH> Family Username </MenuTH>
            </tr>
        </thead>
        <tbody>
            {menuMapper()}
        </tbody>
        </MenuTableStyle>
        </>
     );
}
 
export default MenuTable;