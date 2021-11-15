import moment from 'moment';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from 'styled-components';
import APIURL from '../../helpers/environments';

const MenuCreateStyle = styled.div `
  font-family: 'Josefin Sans', sans-serif;
`;

const MenuCreateHeader = styled.h3 `
  color: white;
  font-size: 40px;
  margin-top: 35%;
`;

const MenuCreateButton = styled.button `
  background-color: #71B414;
  border: none;
  color: white;
  margin-top: 3%;
`;



class MenuCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: "",
            recipeTitle: "",
            ingredientList: "",
            recipeLink: "",
            groupName: "",
            familyUsername: "",
         };
         console.log(this.props.token)
    }

    

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/menu/create`, {
            method: "POST",
            body: JSON.stringify({
              menu: {
                date: this.state.date,
                recipeTitle: this.state.recipeTitle,
                ingredientList: this.state.ingredientList,
                recipeLink: this.state.recipeLink,
                groupName: this.state.groupName,
                familyUsername: this.state.familyUsername,
              },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': this.props.token,
              }),
          })
            .then((res) => res.json())
            .then((menuData) => {
              console.log(menuData);
              this.setState({
                  date: "",
                  recipeTitle: "",
                  ingredientList: "",
                  recipeLink: "",
                  groupName: "",
                  familyUsername: "",
              })
             this.props.fetchMenus();
            });
    };

    render() {
        return (
            <>
            <MenuCreateStyle>
      <MenuCreateHeader>Create a Menu</MenuCreateHeader>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label htmlFor="date" />
          <Input type="date" name="date" placeholder="Date" onChange={(e) => {this.setState({ date:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="recipeTitle" />
          <Input name="recipeTitle" placeholder="Recipe Title" onChange= {(e) => {this.setState({ recipeTitle:(e.target.value)}) }}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ingredientList" />
          <Input name="ingredientList" placeholder="Ingredient List" onChange= {(e) => {this.setState({ ingredientList:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="recipeLink" />
          <Input name="recipeLink" placeholder="Recipe Link" onChange={(e) => {this.setState({ recipeLink:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="groupName" />
          <Input name="groupName" placeholder="Group Name" onChange={(e) => {this.setState({ groupName:(e.target.value)}) }} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="familyUsername" />
          <Input name="familyUsername" placeholder="Family Username" onChange={(e) => {this.setState({ familyUsername:(e.target.value)}) }} />
        </FormGroup>
        <MenuCreateButton type="submit" onClick={() => {window.location.reload();}}>Click to Submit</MenuCreateButton>
      </Form>
      </MenuCreateStyle>
    </>
         );
    }
}

export default MenuCreate;