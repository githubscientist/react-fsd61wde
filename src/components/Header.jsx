import { Component } from "react";

class Header extends Component {
  render() {
    return <h1>{ this.props.greeting } { this.props.name }</h1>
  }
}

export default Header;