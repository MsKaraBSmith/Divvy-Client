import React, { Component } from "react";
import {Container, Row, Col} from 'reactstrap';
import MenuCreate from './MenuCreate';
import MenuTable from "./MenuTable";
import MenuEdit from "./MenuEdit";


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
    fetch(`http://localhost:3000/menu/getmenu`, {
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
        <Container>
        <Row>
            <Col md="3">
            <MenuCreate fetchMenus={this.fetchMenus.bind(this)} token={this.props.token} />
            </Col>
            <Col md="9">
            <MenuTable menus={this.state.menus} editUpdateMenus={this.editUpdateMenus.bind(this)} updateOn={this.updateOn.bind(this)} fetchMenus={this.fetchMenus.bind(this)} token={this.props.token} />
            </Col>
            {this.state.updateActive ? 
            <MenuEdit menuToUpdate={this.state.menuToUpdate} updateOff={this.updateOff.bind(this)} fetchMenus={this.fetchMenus.bind(this)} token={this.props.token}/>
            : <></>}
        </Row>
    </Container>
    );
  }
}

export default MenuIndex;

// import React, { useState, useEffect } from 'react';
// import {Container, Row, Col} from 'reactstrap';
// import MenuCreate from './MenuCreate';

// const MenuIndex = (props) => {
//     const [menu, setMenu] = useState([]);

//     const fetchMenus = () => {
//         fetch(`http://localhost:3000/menu/getmenu`, {
//             method: 'GET',
//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.sessionToken
//             })
//         }).then( (res) => res.json())
//         .then((menuData) => {
//             // setMenu(menuData)
//             console.log(menuData)
//         })
//     }

//     useEffect(() => {
//         fetchMenus();
//     }, [])

//     return (
//         <Container>
//             <Row>
//                 <Col md="3">
//                 <MenuCreate fetchMenus={fetchMenus} token={props.sessionToken}/>
//                 </Col>
//                 <Col md="9">
//                 <h2>Log a menu to see it</h2>
//                 </Col>
//             </Row>
//         </Container>
//      );
// }

// export default MenuIndex;
