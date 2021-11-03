import React, { Component } from 'react';
import DivvyMain from './DivvyMain';

class DivvyIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.token, "this is coming from DivvyIndex")
        return (
            <div>
                <DivvyMain token={this.props.token} />
            </div>
         );
    }
}
 
export default DivvyIndex;
