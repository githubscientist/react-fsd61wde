import { Component } from 'react';

class App extends Component {

  constructor() {
    super(); // calling the parent class constructor

    // initialize state
    this.state = { 
      name: 'Krish'
    }
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1>Hello { this.state.name }!</h1>
      </div>
    )
  }
}

export default App;