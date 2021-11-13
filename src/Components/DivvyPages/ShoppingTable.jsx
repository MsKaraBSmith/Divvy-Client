import React from 'react';
import { Table, Button } from 'reactstrap';
import styled from 'styled-components';

const ShoppingTableStyle = styled.table`
    border: 2px solid white;
    border-collapse: collapse;
    align-content: center;
`;

const ShoppingTD = styled.td `
    border-left: 1px solid white;
    /* padding: 8px; */

`

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
                    <th scope="row">{shopping.id}</th>
                    <ShoppingTD>{shopping.date}</ShoppingTD>
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
                        <td>
                        <Button color="warning" onClick={() => { props.editUpdateShopping(shopping); props.shoppingUpdateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteShopping(shopping); window.location.reload(); }} >Delete</Button>
                        </td>
                    </>) : null}
                    
                </tr>
            )
        })
    };

    return ( 
        <>
        <h3>Shopping List</h3>
        <hr />
        <ShoppingTableStyle>
        <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                {/* <th>Group Name</th>
                <th>Family Username</th> */}
                <th>Fruits</th>
                <th>Vegetables</th>
                <th>Dairy and Eggs</th>
                <th>Canned Goods</th>
                <th>Frozen Foods</th>
                <th>Meat and Protein</th>
                <th>Deli</th>
                <th>Condiments</th>
                <th>Spices and Herbs</th>
                <th>Sauces</th>
                <th>Oils</th>
                <th>Snacks</th>
                <th>Bread and Bakery</th>
                <th>Beverages</th>
                <th>Pasta and Rice</th>
                <th>Cereal</th>
                <th>Baking</th>
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