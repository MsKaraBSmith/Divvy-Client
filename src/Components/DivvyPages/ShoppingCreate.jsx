import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from 'styled-components';

const ShoppingCreateStyle = styled.div `
  width: 50%;
  margin-left: 25%;
  font-family: 'Josefin Sans', sans-serif;
`;

const ShoppingCreateHeader = styled.p `
  color: white;
  font-size: 40px;
  padding-top: 5%;
`;

const ShoppingCreateButton = styled.button `
    background-color: #71B414;
    border: none;
    color: white;
    margin-top: 3%;
`;

class ShoppingCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: "",
            groupName: "",
            familyUsername: "",
            fruits: "",
            vegetables: "",
            dairyAndEggs: "",
            cannedGoods: "",
            frozenFoods: "",
            meat: "",
            seafood: "",
            deli: "",
            condiments: "",
            spicesAndHerbs: "",
            sauces: "",
            oils: "",
            snacks: "",
            breadAndBakery: "",
            beverages: "",
            pastaAndRice: "",
            cereal: "",
            baking: "",
         };
         console.log(this.props.token)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/shopping/create`, {
            method: "POST",
            body: JSON.stringify({
              shopping: {
                date: this.state.date,
                groupName: this.state.groupName,
                familyUsername: this.state.familyUsername,
                fruits: this.state.fruits,
                vegetables: this.state.vegetables,
                dairyAndEggs: this.state.dairyAndEggs,
                cannedGoods: this.state.cannedGoods,
                frozenFoods: this.state.frozenFoods,
                meat: this.state.meat,
                seafood: this.state.seafood,
                deli: this.state.deli,
                condiments: this.state.condiments,
                spicesAndHerbs: this.state.spicesAndHerbs,
                sauces: this.state.sauces,
                oils: this.state.oils,
                snacks: this.state.snacks,
                breadAndBakery: this.state.breadAndBakery,
                beverages: this.state.beverages,
                pastaAndRice: this.state.pastaAndRice,
                cereal: this.state.cereal,
                baking: this.state.baking,
              },
            }),
            headers: new Headers({
              "Content-Type": "application/json",
              'Authorization': this.props.token,
            }),
          })
            .then((res) => res.json())
            .then((shoppingData) => {
              console.log(shoppingData);
              this.setState({
                    date: "",
                    groupName: "",
                    familyUsername: "",
                    fruits: "",
                    vegetables: "",
                    dairyAndEggs: "",
                    cannedGoods: "",
                    frozenFoods: "",
                    meat: "",
                    seafood: "",
                    deli: "",
                    condiments: "",
                    spicesAndHerbs: "",
                    sauces: "",
                    oils: "",
                    snacks: "",
                    breadAndBakery: "",
                    beverages: "",
                    pastaAndRice: "",
                    cereal: "",
                    baking: "",
              })
              this.props.fetchShopping();
            });
    }

    render() {
        return (
            <>
            <ShoppingCreateStyle>
      <ShoppingCreateHeader>Create a Shopping List</ShoppingCreateHeader>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label htmlFor="date" />
          <Input type="date" name="date" placeholder="Date" onChange={(e) => {this.setState({ date:(e.target.value)}) }}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="groupName" />
          <Input name="groupName" placeholder="Group Name" onChange={(e) => {this.setState({ groupName:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="familyUsername" />
          <Input name="familyUsername" placeholder="Family Username" onChange={(e) => {this.setState({ familyUsername:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="fruits" />
          <Input name="fruits" placeholder="Fruits" onChange={(e) => {this.setState({ fruits:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="vegetables" />
          <Input name="vegetables" placeholder="Vegetables" onChange={(e) => {this.setState({ vegetables:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dairyAndEggs" />
          <Input name="dairyAndEggs" placeholder="Dairy and Eggs" onChange={(e) => {this.setState({ dairyAndEggs:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cannedGoods" />
          <Input name="cannedGoods" placeholder="Canned Goods" onChange={(e) => {this.setState({ cannedGoods:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="frozenFoods" />
          <Input name="frozenFoods" placeholder="Frozen Foods" onChange={(e) => {this.setState({ frozenFoods:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="meat" />
          <Input name="meat" placeholder="Meat" onChange={(e) => {this.setState({ meat:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="seafood" />
          <Input name="seafood" placeholder="Seafood" onChange={(e) => {this.setState({ seafood:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="deli" />
          <Input name="deli" placeholder="Deli" onChange={(e) => {this.setState({ deli:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="condiments" />
          <Input name="condiments" placeholder="Condiments" onChange={(e) => {this.setState({ condiments:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="spicesAndHerbs" />
          <Input name="spicesAndHerbs" placeholder="Spices and Herbs" onChange={(e) => {this.setState({ spicesAndHerbs:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="sauces" />
          <Input name="sauces" placeholder="Sauces" onChange={(e) => {this.setState({ sauces:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="oils" />
          <Input name="oils" placeholder="Oils" onChange={(e) => {this.setState({ oils:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="snacks" />
          <Input name="snacks" placeholder="Snacks" onChange={(e) => {this.setState({ snacks:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="breadAndBakery" />
          <Input name="breadAndBakery" placeholder="Bread and Bakery" onChange={(e) => {this.setState({ breadAndBakery:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="beverages" />
          <Input name="beverages" placeholder="Beverages" onChange={(e) => {this.setState({ beverages:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="pastaAndRice" />
          <Input name="pastaAndRice" placeholder="Pasta and Rice" onChange={(e) => {this.setState({ pastaAndRice:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cereal" />
          <Input name="cereal" placeholder="Cereal" onChange={(e) => {this.setState({ cereal:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="baking" />
          <Input name="baking" placeholder="Baking Goods" onChange={(e) => {this.setState({ baking:(e.target.value)}) }} />
        </FormGroup>
        <ShoppingCreateButton type="submit" onClick={() => {window.location.reload();}}>Click to Submit</ShoppingCreateButton>
      </Form>
      </ShoppingCreateStyle>
    </>
         );
    }
}

export default ShoppingCreate;