import React, { Component } from "react";
import {Container, Row, Col} from 'reactstrap';
import ShoppingCreate from "./ShoppingCreate";

class ShoppingIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopping: [],
    };
    // this.fetchShopping.bind(this);
  }

  componentDidMount() {
    this.fetchShopping();
  }

  fetchShopping() {
    fetch(`http://localhost:3000/shopping/getshopping`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          'Authorization': this.props?.token ?? localStorage.getItem("token"),
        }),
    })
      .then((res) => res.json())
      .then((shoppingData) => {
        this.setState({ shopping: shoppingData });
        console.log(shoppingData);
      });
  }

  render() {
    return (
        <Container>
        <Row>
            <Col md="3">
            <ShoppingCreate fetchShopping={this.fetchShopping} token={this.props.token} />
            </Col>
            <Col md="9">
            {/* <h2>Log a shopping list to see it</h2> */}
            </Col>
        </Row>
    </Container>
    );
  }
}

export default ShoppingIndex;