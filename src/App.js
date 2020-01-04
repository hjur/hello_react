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
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
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

  handelUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => info.id === id
        ? {...info, ...data}//새 객체를 만들어서 기존의 값과 전달받은 data 덮어씀
        : info
        )
    })
  }

  render() {
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return(
      <Fragment>
        <MyName name={this.state.info}></MyName>
        <MyName></MyName>
        <Counter></Counter>
        <div>============</div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <p>
          <input placeholder = "검색할 이름?"

          onChange={this.handleChange}
          value ={keyword}
          />
        </p>
        <hr/>
        {JSON.stringify(information)}
        <PhoneInfoList 
          data={filteredList}
          onRemove={this.handelRemove}
          onUpdate={this.handelUpdate}
        ></PhoneInfoList>
      </Fragment>
    )
  }
}

export default App;
