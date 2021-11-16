import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, } from "reactstrap";
import APIURL from "../../helpers/environments";

class MenuEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDate: this.props.menuToUpdate.date,
      editRecipeTitle: this.props.menuToUpdate.recipeTitle,
      editIngredientList: this.props.menuToUpdate.ingredientList,
      editRecipeLink: this.props.menuToUpdate.recipeLink,
      editGroupName: this.props.menuToUpdate.groupName,
      editFamilyUsername: this.props.menuToUpdate.familyUsername,
    };
  }

  menuPostUpdate = () => {
    fetch(
      `${APIURL}/menu/updatemenu/${this.props.menuToUpdate.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
        menu: {
          date: this.state.editDate,
          recipeTitle: this.state.editRecipeTitle,
          ingredientList: this.state.editIngredientList,
          recipeLink: this.state.editRecipeLink,
          groupName: this.state.editGroupName,
          familyUsername: this.state.editFamilyUsername,
        }
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token,
        }),
      }
    ).then(() => {
      this.props.fetchMenus();
      this.props.updateOff();
    });
  };

  closeUpdateModal = () => {
    this.props.updateOff();
  };

  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Edit Menu</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.menuPostUpdate}>
              <FormGroup>
                <Label htmlFor="date">Edit Date</Label>
                <Input type="date"
                  name="date"
                  value={this.state.editDate}
                  onChange={(e) => this.setState({ editDate: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="recipeTitle">Edit Recipe Title</Label>
                <Input
                  name="recipeTitle"
                  value={this.state.editRecipeTitle}
                  onChange={(e) =>
                    this.setState({ editRecipeTitle: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="ingredientList">Edit Ingredient List</Label>
                <Input
                  name="ingredientList"
                  value={this.state.editIngredientList}
                  onChange={(e) =>
                    this.setState({ editIngredientList: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="recipeLink">Edit Recipe Link</Label>
                <Input
                  name="recipeLink"
                  value={this.state.editRecipeLink}
                  onChange={(e) =>
                    this.setState({ editRecipeLink: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="groupName">Edit Group Name</Label>
                <Input
                  name="groupName"
                  value={this.state.editGroupName}
                  onChange={(e) =>
                    this.setState({ editGroupName: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="familyUsername">Edit Family Username</Label>
                <Input
                  name="familyUsername"
                  value={this.state.editFamilyUsername}
                  onChange={(e) =>
                    this.setState({ editFamilyUsername: e.target.value })
                  }
                />
              </FormGroup>
              <Button type="submit">Update the Menu</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MenuEdit;
