import React, { Component } from "react";
import {Container, Row, Col} from 'reactstrap';
import ShoppingCreate from "./ShoppingCreate";
import ShoppingTable from "./ShoppingTable";
import ShoppingEdit from "./ShoppingEdit";
import styled from "styled-components";
import background3 from '../Assets/pexels-anni-roenkae-2457290.jpg'
import APIURL from "../../helpers/environments";

const ShoppingBackground = styled.div `
  background-image: url(${background3});
  background-size: cover;
  width: 100%;
  height: 100%;
  background-repeat: repeat;

`;



class ShoppingIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopping: [],
      shoppingUpdateActive: false,
      shoppingToUpdate: {},
    };
    console.log(this.props.token, "from ShoppingIndex")
  }

  componentDidMount() {
    this.fetchShopping();
  }

  fetchShopping() {
    fetch(`${APIURL}/shopping/getshopping`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          'Authorization': this.props?.token ?? localStorage.getItem("token"),
        }),
    })
      .then((res) => res.json())
      .then((shoppingData) => {
        this.setState({ shopping: shoppingData });
        console.log(this.state.shopping);
      });
  };

  editUpdateShopping = (shopping) => {
    this.setState({
        shoppingToUpdate: shopping
    })
};

shoppingUpdateOn = () => {
    this.setState({
        shoppingUpdateActive: true
    })
};

shoppingUpdateOff = () => {
    this.setState({
        shoppingUpdateActive: false
    })
};



  render() {
    return (
      <ShoppingBackground>
        <Container>
        {/* <Row> */}
          {localStorage.getItem("user")==="admin" || localStorage.getItem("user")==="creator" ? 
          (<>
          {/* <Col md="6"> */}
          <ShoppingCreate fetchShopping={this.fetchShopping.bind(this)} token={this.props.token} />
          {/* </Col> */}
          </>) : null} 
            {/* <Col md="4"> */}
            <ShoppingTable shopping={this.state.shopping} editUpdateShopping={this.editUpdateShopping.bind(this)} shoppingUpdateOn={this.shoppingUpdateOn.bind(this)}fetchShopping={this.fetchShopping.bind(this)} token={this.props.token} />
            {/* </Col> */}
            {this.state.shoppingUpdateActive ?
            <ShoppingEdit shoppingToUpdate={this.state.shoppingToUpdate} shoppingUpdateOff={this.shoppingUpdateOff.bind(this)} fetchShopping={this.fetchShopping.bind(this)} token={this.props.token}/>
            : <></>}
        {/* </Row> */}
    </Container>
    </ShoppingBackground>
    );
  }
}

export default ShoppingIndex;