import React, { Component } from 'react';
import DivvyMain from './DivvyMain';
import styled from 'styled-components';
import background2 from '../Assets/pexels-engin-akyurt-1435904.jpg';


const HomeBackground = styled.div `
    background-image: url(${background2});
    background-size: cover;
/* background-position-y: 10%; */
/* min-height: 100%; */
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
`

class DivvyIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.token, "this is coming from DivvyIndex")
        return (
            <div>
                {/* <HomeBackground> */}
                <DivvyMain token={this.props.token} />
                {/* </HomeBackground> */}
            </div>
         );
    }
}
 
export default DivvyIndex;
