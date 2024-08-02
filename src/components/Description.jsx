import { Component } from "react";

class Description extends Component {
  render() {
    return <p>A message to { this.props.name } that we are here!</p>
  }
}

export default Description;