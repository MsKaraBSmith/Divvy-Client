import React from 'react';
import DivvyNav from './DivvyNav';
import Sitebar from '../Home/Navbar';
import styled from 'styled-components';
import background2 from '../Assets/pexels-engin-akyurt-1435904.jpg'; 

// import MenuCreate from './MenuCreate';
//import ShoppingIndex from './ShoppingIndex';
// import ShoppingCreate from './ShoppingCreate';

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
z-index: -30;
`


const DivvyMain = (props) => {
    console.log(props.token, "this is coming from DivvyMain")

    return (
        // <HomeBackground>
        <div>
            <DivvyNav token={props.token} />
            <HomeBackground>
            <h1>Welcome to Divvy!</h1>
            </HomeBackground>
            </div>
      
    )
}

export default DivvyMain;