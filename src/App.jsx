import { Component } from 'react';

class App extends Component {

  constructor() {
    super(); // calling the parent class constructor

    // initialize state
    this.state = { 
      name: 'Krish'
    }
  }

  handleClick = () => {
    // should not mutate the state directly
    // this.state.name = 'Kailash'; // this will not work
    this.setState({
      name: 'Kailash'
    });
    console.log(this.state);
  }

  render() {

    console.log(this.state);

    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    )
  }
}

export default App;