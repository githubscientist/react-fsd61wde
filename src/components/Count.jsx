import { Component } from 'react';

export class Count extends Component {

    constructor(props) {
        super(props);
    }

    // mounting phase
  componentDidMount() {
    console.log('Component has been mounted');
  }

  // updating phase
  componentDidUpdate() {
    console.log('Component has been updated');
  }

  // unmounting phase
  componentWillUnmount() {
    console.log('Component will be unmounted');
  }

  render() {

    const { count, incrementCount } = this.props;
 
    return (
        <div>
            <h1>Count: { count }</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
  }
}

export default Count;