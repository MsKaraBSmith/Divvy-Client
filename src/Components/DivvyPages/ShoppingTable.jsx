import React from 'react';
import { Table, Button } from 'reactstrap';
import styled from 'styled-components';
import moment from 'moment';

const ShoppingTableStyle = styled.table`
    border: 5px solid limegreen;
    border-collapse: collapse;
    align-content: center;
    background-color: white;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 17px;
`;

const ShoppingTD = styled.td `
    border-left: 1px solid red;
    /* padding: 8px; */
`;

const ShoppingTH= styled.th `
    border-left: 1px solid red;
    border-bottom: 3px solid red;
    border-right: 1px solid red;
`;

const ShoppingTableName = styled.p `
  color: white;
  font-size: 40px;
  padding-top: 5%;
  font-family: 'Josefin Sans', sans-serif;
`;


const ShoppingTable = (props) => {
console.log(props.shopping)

    const deleteShopping = (shopping) => {
        fetch(`http://localhost:3000/shopping/delete/${shopping.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token,
            })
        })
        .then(() => props.fetchShopping())
    }

    const shoppingMapper = () => {
        return props.shopping.map((shopping, index) => {
            return(
                <tr key={index}>
                    {/* <th scope="row">{shopping.id}</th> */}
                    <ShoppingTD>{moment(shopping.date).format("L")}</ShoppingTD>
                    {/* <td>{shopping.groupName}</td>
                    <td>{shopping.familyUsername}</td> */}
                    <ShoppingTD>{shopping.fruits}</ShoppingTD>
                    <ShoppingTD>{shopping.vegetables}</ShoppingTD>
                    <ShoppingTD>{shopping.dairyAndEggs}</ShoppingTD>
                    <ShoppingTD>{shopping.cannedGoods}</ShoppingTD>
                    <ShoppingTD>{shopping.frozenFoods}</ShoppingTD>
                    <ShoppingTD>{shopping.meat}</ShoppingTD>
                    <ShoppingTD>{shopping.seafood}</ShoppingTD>
                    <ShoppingTD>{shopping.deli}</ShoppingTD>
                    <ShoppingTD>{shopping.condiments}</ShoppingTD>
                    <ShoppingTD>{shopping.spicesAndHerbs}</ShoppingTD>
                    <ShoppingTD>{shopping.sauces}</ShoppingTD>
                    <ShoppingTD>{shopping.oils}</ShoppingTD>
                    <ShoppingTD>{shopping.snacks}</ShoppingTD>
                    <ShoppingTD>{shopping.breadAndBakery}</ShoppingTD>
                    <ShoppingTD>{shopping.beverages}</ShoppingTD>
                    <ShoppingTD>{shopping.pastaAndRice}</ShoppingTD>
                    <ShoppingTD>{shopping.cereal}</ShoppingTD>
                    <ShoppingTD>{shopping.baking}</ShoppingTD>
                    {localStorage.getItem("user")==="admin" || localStorage.getItem("user")==="creator" ? (<>
                        <ShoppingTD>
                        <Button color="warning" onClick={() => { props.editUpdateShopping(shopping); props.shoppingUpdateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteShopping(shopping); window.location.reload(); }} >Delete</Button>
                        </ShoppingTD>
                    </>) : null}
                    
                </tr>
            )
        })
    };

    return ( 
        <>
        <ShoppingTableName>Shopping List</ShoppingTableName>
        <ShoppingTableStyle>
        <thead>
            <tr>
                {/* <ShoppingTH>#</ShoppingTH> */}
                <ShoppingTH>Date</ShoppingTH>
                {/* <th>Group Name</th>
                <th>Family Username</th> */}
                <ShoppingTH>Fruits</ShoppingTH>
                <ShoppingTH>Vegetables</ShoppingTH>
                <ShoppingTH>Dairy and Eggs</ShoppingTH>
                <ShoppingTH>Canned Goods</ShoppingTH>
                <ShoppingTH>Frozen Foods</ShoppingTH>
                <ShoppingTH>Meat and Protein</ShoppingTH>
                <ShoppingTH>Seafood</ShoppingTH>
                <ShoppingTH>Deli</ShoppingTH>
                <ShoppingTH>Condiments</ShoppingTH>
                <ShoppingTH>Spices and Herbs</ShoppingTH>
                <ShoppingTH>Sauces</ShoppingTH>
                <ShoppingTH>Oils</ShoppingTH>
                <ShoppingTH>Snacks</ShoppingTH>
                <ShoppingTH>Bread and Bakery</ShoppingTH>
                <ShoppingTH>Beverages</ShoppingTH>
                <ShoppingTH>Pasta and Rice</ShoppingTH>
                <ShoppingTH>Cereal</ShoppingTH>
                <ShoppingTH>Baking</ShoppingTH>
            </tr>
        </thead>
        <tbody>
            {shoppingMapper()}
        </tbody>
        </ShoppingTableStyle>
        </>
     );
}
 
export default ShoppingTable;