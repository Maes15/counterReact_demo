import React, { Component } from 'react';
import './contador.css';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = { count:  Number(props.from) || 0};
    }
    increment = () => {
        let amountToIncrement = Number(this.props.amount) || 1;

        if(amountToIncrement > 0) {
            if (!this.props.max || this.state.count + amountToIncrement < this.props.max) {
                this.setState({count: Number(this.state.count) + amountToIncrement})
            } else {
                this.setState({count: Number(this.props.from) || 0})
            }
        }

        if(amountToIncrement < 0) {
            if (!this.props.min || this.state.count + amountToIncrement > this.props.min) {
                this.setState({count: Number(this.state.count) + amountToIncrement})
            } else {
                this.setState({count: Number(this.props.from) || 0})
            }
        }


    };
    render(){
        return <div onClick={this.increment} className="counter">
            <h1 className={this.state.count % 2 === 0 ? 'even' : 'odd'}>{this.state.count}</h1>
                <small>
                    <pre style={{ fontSize: this.state.count + 'px' }}>
                        {JSON.stringify(this.props)}
                    </pre>
                </small>
        </div>;
    }
}

export default Counter