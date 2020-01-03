import React, {Component} from 'react';

class MyName extends Component{
    static defaultProps ={
        name : "???"
    }
    render() {
        return(
            <div>
                hi my name is {this.props.name}
            </div>
        )
    }
}

export default MyName;