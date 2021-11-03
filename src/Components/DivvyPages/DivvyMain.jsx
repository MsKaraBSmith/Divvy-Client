import React from 'react';
import DivvyNav from './DivvyNav';

// import MenuCreate from './MenuCreate';
//import ShoppingIndex from './ShoppingIndex';
// import ShoppingCreate from './ShoppingCreate';


const DivvyMain = (props) => {
    console.log(props.token, "this is coming from DivvyMain")

    return (
        <div>
            <DivvyNav token={props.token} />
        </div>
    )
}

export default DivvyMain;