import React, {Component} from 'react';

class MyName extends Component{
    render() {
        return(
            <div>
                hi my name is {this.props.name}
            </div>
        )
    }
}

export default MyName;