import React, { Component, Fragment } from 'react';
import MyName from './MyName';
import Counter from './Counter';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component{
  id = 2
  state={
    info:'',
    information: [
      {
        id:0,
        name:'jju',
        phone:'000-0000-0000'
      },
      {
        id:1,
        name:'jae',
        phone:'111-1111-1111'
      }
    ]
  }
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      info:`${data.name[0]} and phone number is ${data.phone[0]}`,
      information: information.concat({id:this.id++, ...data})
    })
  }

  handelRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  render() {
    const {information} = this.state;
    return(
      <Fragment>
        <MyName name={this.state.info}></MyName>
        <MyName></MyName>
        <Counter></Counter>
        <div>============</div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        {JSON.stringify(information)}
        <PhoneInfoList 
          data={information}
          onRemove={this.handelRemove}
        ></PhoneInfoList>
      </Fragment>
    )
  }
}

export default App;
