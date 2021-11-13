import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import APIURL from '../../helpers/environments';


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
    }

    render() {
        return (
            <>
      <h3>Create a Menu</h3>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label htmlFor="date" />
          <Input type="date" name="date" placeholder="Date" onChange={(e) => {this.setState({ date:(e.target.value)}) }}/>
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
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
         );
    }
}

export default MenuCreate;

// import React, { useState, useEffect } from "react";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// const MenuCreate = (props) => {
//   const [date, setDate] = useState("");
//   const [recipeTitle, setRecipeTitle] = useState("");
//   const [ingredientList, setIngredientList] = useState("");
//   const [recipeLink, setRecipeLink] = useState("");
//   const [groupName, setGroupName] = useState("");
//   const [familyUsername, setFamilyUsername] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:3000/menu/create`, {
//       method: "POST",
//       body: JSON.stringify({
//         menu: {
//           date: date,
//           recipeTitle: recipeTitle,
//           ingredientList: ingredientList,
//           recipeLink: recipeLink,
//           groupName: groupName,
//           familyUsername: familyUsername,
//         },
//       }),
//       headers: new Headers({
//         "Content-Type": "application/json",
//         'Authorization': props.sessionToken,
//       }),
//     })
//       .then((res) => res.json())
//       .then((menuData) => {
//         console.log(menuData);
//         setDate("");
//         setRecipeTitle("");
//         setIngredientList("");
//         setRecipeLink("");
//         setGroupName("");
//         setFamilyUsername("");
//         props.fetchMenus();
//       });
//   };

//   return (
//     <>
//       <h3>Creat a Menu</h3>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlFor="date" />
//           <Input type="date" name="date" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)} />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="recipeTitle" />
//           <Input name="recipeTitle" placeholder="Recipe Title" value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)} />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="ingredientList" />
//           <Input name="ingredientList" placeholder="Ingredient List" value={ingredientList} onChange={(e) => setIngredientList(e.target.value)} />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="recipeLink" />
//           <Input name="recipeLink" placeholder="Recipe Link" value={recipeLink} onChange={(e) => setRecipeLink(e.target.value)} />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="groupName" />
//           <Input name="groupName" placeholder="Group Name" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="familyUsername" />
//           <Input name="familyUsername" placeholder="Family Username" value={familyUsername} onChange={(e) => setFamilyUsername(e.target.value)} />
//         </FormGroup>
//         <Button type="submit">Click to Submit</Button>
//       </Form>
//     </>
//   );
// };

// export default MenuCreate;
