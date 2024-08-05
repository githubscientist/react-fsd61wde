import { Component } from 'react';

class App extends Component {

  constructor() {
    super(); // calling the parent class constructor

    // initialize state
    this.state = { 
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset = () => {
    this.setState({
      count: 0
    });
  }

  render() {

    console.log(this.state);

    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default App;