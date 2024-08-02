import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {

    console.log('rendering the component...');

    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.handleClick}>Count: { this.state.count }</button>
      </div>
    )
  }
}

export default App;