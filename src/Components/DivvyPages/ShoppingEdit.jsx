import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, } from "reactstrap";

class ShoppingEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDate: this.props.shoppingToUpdate.date,
      editGroupName: this.props.shoppingToUpdate.groupName,
      editFamilyUsername: this.props.shoppingToUpdate.familyUsername,
      editFruits: this.props.shoppingToUpdate.fruits,
      editVegetables: this.props.shoppingToUpdate.vegetables,
      editDairyAndEggs: this.props.shoppingToUpdate.dairyAndEggs,
      editCannedGoods: this.props.shoppingToUpdate.cannedGoods,
      editFrozenFoods: this.props.shoppingToUpdate.frozenFoods,
      editMeat: this.props.shoppingToUpdate.meat,
      editSeafood: this.props.shoppingToUpdate.seafood,
      editDeli: this.props.shoppingToUpdate.deli,
      editCondiments: this.props.shoppingToUpdate.condiments,
      editSpicesAndHerbs: this.props.shoppingToUpdate.spicesAndHerbs,
      editSauces: this.props.shoppingToUpdate.sauces,
      editOils: this.props.shoppingToUpdate.oils,
      editSnacks: this.props.shoppingToUpdate.snacks,
      editBreadAndBakery: this.props.shoppingToUpdate.breadAndBakery,
      editBeverages: this.props.shoppingToUpdate.beverages,
      editPastaAndRice: this.props.shoppingToUpdate.pastaAndRice,
      editCereal: this.props.shoppingToUpdate.cereal,
      editBaking: this.props.shoppingToUpdate.baking,

    };
  }

  shoppingPostUpdate = () => {
     const token = localStorage.getItem("token");
     var myHeaders = new Headers();
myHeaders.append("Authorization", token);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  shopping: {
        date: this.state.editDate,
          groupName: this.state.editGroupName,
          familyUsername: this.state.editFamilyUsername,
          fruits: this.state.editFruits,
          vegetables: this.state.editVegetables,
          dairyAndEggs: this.state.editDairyAndEggs,
          cannedGoods: this.state.editCannedGoods,
          frozenFoods: this.state.editFrozenFoods,
          meat: this.state.editMeat,
          seafood: this.state.editSeafood,
          deli: this.state.editDeli,
          condiments: this.state.editCondiments,
          spicesAndHerbs: this.state.editSpicesAndHerbs,
          sauces: this.state.editSauces,
          oils: this.state.editOils,
          snacks: this.state.editSnacks,
          breadAndBakery: this.state.editBreadAndBakery,
          beverages: this.state.editBeverages,
          pastaAndRice: this.state.editPastaAndRice,
          cereal: this.state.editCereal,
          baking: this.state.editBaking,
  }
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`http://localhost:3000/shopping/updateshopping/${this.props.shoppingToUpdate.id}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); 
    // fetch(
    //   `http://localhost:3000/shopping/updateshopping/${this.props.shoppingToUpdate.id}`,
    //   {
    //     method: "PUT",
    //     body: JSON.stringify({
    //     menu: {
        //   date: this.state.editDate,
        //   groupName: this.state.editGroupName,
        //   familyUsername: this.state.editFamilyUsername,
        //   fruits: this.state.editFruits,
        //   vegetables: this.state.editVegetables,
        //   dairyAndEggs: this.state.editDairyAndEggs,
        //   cannedGoods: this.state.editCannedGoods,
        //   frozenFoods: this.state.editFrozenFoods,
        //   meat: this.state.editMeat,
        //   seafood: this.state.editSeafood,
        //   deli: this.state.editDeli,
        //   condiments: this.state.editCondiments,
        //   spicesAndHerbs: this.state.editSpicesAndHerbs,
        //   sauces: this.state.editSauces,
        //   oils: this.state.editOils,
        //   snacks: this.state.editSnacks,
        //   breadAndBakery: this.state.editBreadAndBakery,
        //   beverages: this.state.editBeverages,
        //   pastaAndRice: this.state.editPastaAndRice,
        //   cereal: this.state.editCereal,
        //   baking: this.state.editBaking,
    //     }
    //     }),
    //     headers: new Headers({
    //       "Content-Type": "application/json",
    //       Authorization: token,
    //     }),
    //   }
    // ).then(() => {
    //   this.props.fetchShopping();
    //   this.props.shoppingUpdateOff();
    // });
  };

  closeShoppingUpdateModal = () => {
    this.props.shoppingUpdateOff();
  };

  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Edit Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.shoppingPostUpdate}>
              <FormGroup>
                <Label htmlFor="date">Edit Date</Label>
                <Input
                  name="date"
                  value={this.state.editDate}
                  onChange={(e) => this.setState({ editDate: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="groupName">Edit Group Name</Label>
                <Input
                  name="groupName"
                  value={this.state.editGroupName}
                  onChange={(e) => this.setState({ editGroupName: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="familyUsername">Edit Family Username</Label>
                <Input
                  name="familyUsername"
                  value={this.state.editFamilyUsername}
                  onChange={(e) => this.setState({ editFamilyUsername: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="fruits">Edit Fruits</Label>
                <Input
                  name="fruits"
                  value={this.state.editFruits}
                  onChange={(e) => this.setState({ editFruits: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="vegetables">Edit Vegetables</Label>
                <Input
                  name="vegetables"
                  value={this.state.editVegetables}
                  onChange={(e) => this.setState({ editVegetables: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="dairyAndEggs">Edit Dairy and Eggs</Label>
                <Input
                  name="dairyAndEggs"
                  value={this.state.editDairyAndEggs}
                  onChange={(e) => this.setState({ editDairyAndEggs: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="cannedGoods">Edit Canned Goods</Label>
                <Input
                  name="cannedGoods"
                  value={this.state.editCannedGoods}
                  onChange={(e) => this.setState({ editCannedGoods: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="frozenFoods">Edit Frozen Foods</Label>
                <Input
                  name="frozenFoods"
                  value={this.state.editFrozenFoods}
                  onChange={(e) => this.setState({ editFrozenFoods: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="meat">Edit Meat and Other Proteins</Label>
                <Input
                  name="meat"
                  value={this.state.editMeat}
                  onChange={(e) => this.setState({ editMeat: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="seafood">Edit Seafood</Label>
                <Input
                  name="seafood"
                  value={this.state.editSeafood}
                  onChange={(e) => this.setState({ editSeafood: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="deli">Edit Deli Items</Label>
                <Input
                  name="deli"
                  value={this.state.editDeli}
                  onChange={(e) => this.setState({ editDeli: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="condiments">Edit Condiments</Label>
                <Input
                  name="condiments"
                  value={this.state.editCondiments}
                  onChange={(e) => this.setState({ editCondiments: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="spicesAndHerbs">Edit Spices and Herbs</Label>
                <Input
                  name="spicesAndHerbs"
                  value={this.state.editSpicesAndHerbs}
                  onChange={(e) => this.setState({ editSpicesAndHerbs: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="sauces">Edit Sauces</Label>
                <Input
                  name="sauces"
                  value={this.state.editSauces}
                  onChange={(e) => this.setState({ editSauces: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="oils">Edit Oils</Label>
                <Input
                  name="oils"
                  value={this.state.editOils}
                  onChange={(e) => this.setState({ editOils: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="snacks">Edit Snacks</Label>
                <Input
                  name="snacks"
                  value={this.state.editSnacks}
                  onChange={(e) => this.setState({ editSnacks: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="breadAndBakery">Edit Bakery Items</Label>
                <Input
                  name="breadAndBakery"
                  value={this.state.editBreadAndBakery}
                  onChange={(e) => this.setState({ editBreadAndBakery: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="beverages">Edit Beverages</Label>
                <Input
                  name="beverages"
                  value={this.state.editBeverages}
                  onChange={(e) => this.setState({ editBeverages: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="pastaAndRice">Edit Pasta and Rice</Label>
                <Input
                  name="pastaAndRice"
                  value={this.state.editPastaAndRice}
                  onChange={(e) => this.setState({ editPastaAndRice: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="cereal">Edit Cereal</Label>
                <Input
                  name="cereal"
                  value={this.state.editCereal}
                  onChange={(e) => this.setState({ editCereal: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="baking">Edit Baking Items</Label>
                <Input
                  name="baking"
                  value={this.state.editBaking}
                  onChange={(e) => this.setState({ editBaking: e.target.value })
                  }
                />
              </FormGroup>
              
              <Button type="submit">Update the Shopping List</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ShoppingEdit;
