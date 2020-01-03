import React, {Component} from 'react';


const Problematic = () => {
    throw (new Error('errrrrrrrrr'));
    return(
        <div>
        </div>
    );
};


class Counter extends Component{
    state = {
        number: 0
    }

    constructor(props){
        super(props);
        console.log('constructor', '컴포넌트 생성자');
    }

    componentWillMount(){
        console.log('componentWillMount (deprecated)', '화면에 나가기 직전 호출, == UNSAFE_componentWillMount()');
    }

    componentDidMount(){
        console.log('componentDidMount','컴포넌트가 화면에 나타났을 때 호출');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate','리렌더링~');
        // number 가 5의 배수라면 리렌더링 안함
        if(nextState.number % 5 === 0 ) return false;
        return true
    }

    componentWillUpdate(nextProps,nextState){
        console.log('componentWillUpdate','shouldComponentUpdate = true 일 때 호출, == getSnapshotBeforeUpdate');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate','render() 호출 후 발생, this.props와 this.state 가 바뀐 상태.');
    }

    componentDidCatch(error, info){
        console.log('*******');
        console.log('에러가 발생하면 호출');
        console.log('state.error 를 true 로 설정하고 render 함수 쪽에서 사용');
        console.log('자신의 render 함수 에러는 캐치 못함 ');
        console.log('자식 내부 에러는 캐치 가능 ');
        console.log('*******');
        this.setState({
            error: true
        })
    }

    handleIncrease = () => {
        const {number} = this.state;
        this.setState({
            // number: this.state.number + 1
            number: number + 1
        });
    }
    
    // handleDecrease = () => {
    //     this.setState(
    //         (state) => ({
    //             number: state.number - 1
    //         })
    //     );
    // }
    handleDecrease = () => {
        this.setState(
            ({number}) => ({
                number: number - 1
            })
        );
    }

    render(){
        if(this.state.error) return (<h1>errrrr</h1>)
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {this.state.number === 4 && <Problematic/>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;