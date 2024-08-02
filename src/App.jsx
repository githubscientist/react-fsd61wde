import { Component } from "react";

class Header extends Component {
  render() {
    return <h1>Hello World</h1>
  }
}

class Description extends Component {
  render() {
    return <p>A message to the world that we are here!</p>
  }
}


class Hello extends Component {
  render() {
    return (
      <div>
        <Header />
        <Description />
      </div>
    )
  }
}

class App extends Component{
  render() {
    return (
      <div>
        <Hello />
        <Hello />
        <Hello />
      </div>
    )
  }
}

export default App;