import React, {Component} from 'react';

class PhoneForm extends Component {
    state={
        name:'',
        phone:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // 부모에게 전달
        this.props.onCreate(this.state);
        // 초기화
        this.setState({
            name:'',
            phone:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                placeholder="이름"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                >
                </input>
                <input
                placeholder="전화번호"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                >
                </input>
                {/* <div>{this.state.name} : {this.state.phone}</div> */}
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;