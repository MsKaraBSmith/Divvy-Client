import React from 'react';
import { Table, Button } from 'reactstrap';

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
                    <td>{shopping.date}</td>
                    <td>{shopping.groupName}</td>
                    <td>{shopping.familyUsername}</td>
                    <td>{shopping.fruits}</td>
                    <td>{shopping.vegetables}</td>
                    <td>{shopping.dairyAndEggs}</td>
                    <td>{shopping.cannedGoods}</td>
                    <td>{shopping.frozenFoods}</td>
                    <td>{shopping.meat}</td>
                    <td>{shopping.seafood}</td>
                    <td>{shopping.deli}</td>
                    <td>{shopping.condiments}</td>
                    <td>{shopping.spicesAndHerbs}</td>
                    <td>{shopping.sauces}</td>
                    <td>{shopping.oils}</td>
                    <td>{shopping.snacks}</td>
                    <td>{shopping.breadAndBakery}</td>
                    <td>{shopping.beverages}</td>
                    <td>{shopping.pastaAndRice}</td>
                    <td>{shopping.cereal}</td>
                    <td>{shopping.baking}</td>
                    <td>
                        <Button color="warning" onClick={() => { props.editUpdateShopping(shopping); props.shoppingUpdateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteShopping(shopping); window.location.reload(); }} >Delete</Button>
                    </td>
                </tr>
            )
        })
    };

    return ( 
        <>
        <h3>Shopping List</h3>
        <hr />
        <Table striped>
        <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Group Name</th>
                <th>Family Username</th>
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
        </Table>
        </>
     );
}
 
export default ShoppingTable;