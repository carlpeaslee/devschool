import React, { Component } from 'react';
import devschool from './devschool.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.firstChange = this.firstChange.bind(this)
    this.secondChange = this.secondChange.bind(this)
    this.calculate = this.calculate.bind(this)
    this.state = {
      sumOfSquares: undefined,
      squareOfSums: undefined,
      finalAnswer: undefined,
    }
  }
  firstChange(event) {
    this.setState({
      ...this.state,
      firstValue: event.target.value,
    })
  }
  secondChange(event) {
    this.setState({
      ...this.state,
      secondValue: event.target.value,
    })
  }
  calculate(){
    const calculateSumOfSquares = () => {
      let start = parseInt(this.state.firstValue)
      let stop = parseInt(this.state.secondValue)
      let total = 0
      while(start <= stop) {
        console.log('start', start)
        let square = start * start
        console.log('square', square)
        total += square
        console.log('total', total)
        start++
      }
      return total
    }
    const sumOfSquares = calculateSumOfSquares()
    console.log('sumOfSquares', sumOfSquares)
    const calculateSquareOfSums = () => {
      let start = parseInt(this.state.firstValue)
      let stop = parseInt(this.state.secondValue)
      let sum = 0
      while(start <= stop) {
        console.log('start', start)
        sum += start
        console.log('sum', sum)
        start++
      }
      let total = sum * sum
      return total
    }
    const squareOfSums = calculateSquareOfSums()
    console.log('squareOfSums', squareOfSums)
    let finalAnswer = squareOfSums - sumOfSquares
    console.log(finalAnswer)
    this.setState({
      sumOfSquares,
      squareOfSums,
      finalAnswer,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={devschool} className="App-logo" alt="logo" />
          <h2>Devschool Math Problem</h2>
        </div>
        <div className="App-body">
          <p>
          The sum of the squares of the first ten natural numbers is,
          1^2 + 2^2 + ... + 10^2 = 385

          The square of the sum of the first ten natural numbers is,
          (1 + 2 + ... + 10)^2 = 552 = 3025

          Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

          Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
          </p>

          <div>
              <label>Starting Number</label>
              <input
                type="number"
                value={this.firstValue}
                onChange={this.firstChange}
              >

              </input>
              <label>Ending Number</label>
              <input
                type="number"
                value={this.secondValue}
                onChange={this.secondChange}
              >
              </input>
              <button
                onClick={this.calculate}
              >Calculate</button>
          </div>
          <div>
            <h4>Sum of Squares: {this.state.sumOfSquares}</h4>
            <h4>Square of Sums: {this.state.squareOfSums}</h4>
            <h3>Final Answer: {this.state.finalAnswer}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
