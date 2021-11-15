import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, } from "reactstrap";
import APIURL from "../../helpers/environments";

class AdminEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editGroupName: this.props.userToUpdate.groupName,
      editFamilyUsername: this.props.userToUpdate.familyUsername,
      editUsername: this.props.userToUpdate.username,
    //   editPassword: this.props.userToUpdate.password,
      editRole: this.props.userToUpdate.role,
    };
  }

  userUpdate = () => {
    fetch(
      `${APIURL}/user/update/${this.props.userToUpdate.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
        user: {
          groupName: this.state.editGroupName,
          familyUsername: this.state.editFamilyUsername,
          username: this.state.editUsername,
        //   password: this.state.editPassword,
          role: this.state.editRole,
        }
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token,
        }),
      }
    ).then(() => {
      this.props.fetchUsers();
      this.props.userUpdateOff();
    });
  };

  closeUpdateModal = () => {
    this.props.userUpdateOff();
  };

  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Edit Group Member</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.userUpdate}>
              <FormGroup>
                <Label htmlFor="date">Edit Group Name</Label>
                <Input
                  name="groupName"
                  value={this.state.editGroupName}
                  onChange={(e) => this.setState({ editGroupName: e.target.value })}
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
              <FormGroup>
                <Label htmlFor="username">Edit Username</Label>
                <Input
                  name="username"
                  value={this.state.editUsername}
                  onChange={(e) =>
                    this.setState({ editUsername: e.target.value })
                  }
                />
              </FormGroup>
              {/* <FormGroup>
                <Label htmlFor="password">Edit Password</Label>
                <Input
                  name="password"
                  value={this.state.editPassword}
                  onChange={(e) =>
                    this.setState({ editPassword: e.target.value })
                  }
                />
              </FormGroup> */}
              <FormGroup>
                <Label htmlFor="role">Edit Role</Label>
                <Input type="select" name="role" onChange={(e) => this.setState({ role: e.target.value})} name="role" value={this.state.role}>
                        <option value="admin">Admin</option>
                        <option value="creator">Creator</option>
                        <option value="user">User</option>
                    </Input>
              </FormGroup>
              <Button type="submit">Update the Group Member</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AdminEdit;