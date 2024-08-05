import { Component } from 'react';

class App extends Component {

  constructor() {
    super(); // calling the parent class constructor

    // initialize state
    this.state = { 
      count: 0
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {

    console.log(this.state);

    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}

export default App;