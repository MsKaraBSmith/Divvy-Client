import React, { Component } from "react";
import {Container, Row, Col} from 'reactstrap';
import MenuCreate from './MenuCreate';
import MenuTable from "./MenuTable";
import MenuEdit from "./MenuEdit";
import styled from "styled-components";
import background3 from '../Assets/pexels-anni-roenkae-2457290.jpg';
import APIURL from "../../helpers/environments";

const MenuBackground = styled.div `
  background-image: url(${background3});
  background-size: cover;
`;


class MenuIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      updateActive: false,
      menuToUpdate: {},
    };
    console.log(this.props.token, "This is from MenuIndex.")
  }

  componentDidMount() {
    this.fetchMenus();
  }

  fetchMenus= () => {
    fetch(`${APIURL}/menu/getmenu`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': this.props?.token ?? localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((menuData) => {
        this.setState({ menus: menuData });
        console.log(menuData);
      });
  };

  editUpdateMenus = (menus) => {
      this.setState({
          menuToUpdate: menus
      })
  };

  updateOn = () => {
      this.setState({
          updateActive: true
      })
  };

  updateOff = () => {
      this.setState({
          updateActive: false
      })
  };

  render() {
    return (
      <MenuBackground>
        <Container>
        <Row>
            
            {localStorage.getItem("user")==="admin" || localStorage.getItem("user")==="creator" ? 
            (<>
            <Col md="3">
            <MenuCreate fetchMenus={this.fetchMenus.bind(this)} token={this.props.token} />
            </Col>
            </>): null
            }
            {/* {localStorage.getItem("user")==="creator" ? 
            (<>
            <Col md="3">
            <MenuCreate fetchMenus={this.fetchMenus.bind(this)} token={this.props.token} />
            </Col>
            </>): null
            } */}
            
            <Col md="9">
            <MenuTable menus={this.state.menus} editUpdateMenus={this.editUpdateMenus.bind(this)} updateOn={this.updateOn.bind(this)} fetchMenus={this.fetchMenus.bind(this)} token={this.props.token} />
            </Col>
            {this.state.updateActive ? 
            <MenuEdit menuToUpdate={this.state.menuToUpdate} updateOff={this.updateOff.bind(this)} fetchMenus={this.fetchMenus.bind(this)} token={this.props.token}/>
            : <></>}
        </Row>
    </Container>
    </MenuBackground>
    );
  }
}

export default MenuIndex;