import React, {Component} from 'react';
import Amount from './Amount';
import Interest from './Interest';
import Tenure from './Tenure';
import DataFirst from './DataFirst';
import DataSecond from './DataSecond';

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            amount: 5000,
            interest: 6,
            tenure:6
        }
    }

    handleAmount = (event) => {
        this.setState({
            ...this.state,
            amount: event.target.value,
        })
    }
    handleInterest = (event) => {
        this.setState({
            ...this.state,
            interest: event.target.value,
        })
    }
    handleTenure = (event) => {
        this.setState({
            ...this.state,
            tenure: event.target.value,
        })
    }

    render() {
        return(
            <>
            <h1>EMI Calculator</h1>
            <Amount amount={this.state.amount} handleClick={this.handleAmount}/>
           <Interest interest={this.state.interest} handleClick={this.handleInterest}/>
           <Tenure tenure={this.state.tenure} handleClick={this.handleTenure}/>
            <div className='row'>
            <DataFirst data={this.state}/>
            <DataSecond data={this.state}/>
            </div>
            </>
        )
    }
}

export default Calculator;
