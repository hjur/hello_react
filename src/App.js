import React, { Component, Fragment } from 'react';
import MyName from './MyName';
import Counter from './Counter';
import PhoneForm from './components/PhoneForm';

class App extends Component{
  state={
    info:''
  }
  handleCreate = (data) => {
    this.setState({
      info:`${data.name} and phone number is ${data.phone}`
    })
  }
  render() {
    return(
      <Fragment>
        <MyName name={this.state.info}></MyName>
        <MyName></MyName>
        <Counter></Counter>
        <div>============</div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
      </Fragment>
    )
  }
}

export default App;
