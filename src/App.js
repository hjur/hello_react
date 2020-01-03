import React, { Component, Fragment } from 'react';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component{
  render() {
    return(
      <Fragment>
        <MyName name="jju"></MyName>
        <MyName></MyName>
        <Counter></Counter>
      </Fragment>
    )
  }
}

export default App;
