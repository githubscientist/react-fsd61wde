import useCounter from "./customHooks/useCounter";

const App = () => {

  const counter = useCounter();

  const style = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px'
  }

  return (
    <div>
      <div style={style}>
        <button onClick={counter.reset}>reset</button>
      </div>
      <div style={style}>
        <button onClick={counter.increase}>plus</button>
        <div>{ counter.count }</div>
        <button onClick={counter.decrease}>minus</button>
      </div>
    </div>
  )
}

export default App;