import { Component } from "react";
import Hello from "./components/Hello";

class App extends Component{

  render() {

    const names = [
      {
        name: 'Peter',
        greeting: 'Hello'
      },
      {
        name: 'Clark',
        greeting: 'Hi'
      },
      {
        name: 'Bruce',
        greeting: 'Hey'
      }
    ];

    return (
      <div>
        <Hello 
          name={names[0].name}
          greeting={names[0].greeting}
        />
        <Hello 
          name={names[1].name}
          greeting={names[1].greeting}
        />
        <Hello 
          name={names[2].name}
          greeting={names[2].greeting}
        />
      </div>
    )
  }
}

export default App;