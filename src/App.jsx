import { Component } from 'react';
import Count from './components/Count';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      visible: true
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  toggle = () => {
    this.setState({
      ...this.state,
      visible: !this.state.visible
    })
  }

  render() {

    const { count, visible } = this.state;

    return (
      <div>
        <h1>
          <button onClick={this.toggle}>
            {
              visible ? 'Hide' : 'Show'
            }
          </button> 
        </h1>
        {
          visible &&
          <Count 
            count={count}
            incrementCount={this.increment}
          />
        }
      </div>
    )
  }
}

export default App;