const D = ({ name }) => {
  return <h1>Hello {name}!</h1>;
}

const C = ({ name }) => {
  return <D
    name={name}
  />;
}

const B = ({ name }) => {
  return <C 
    name={name}
  />;
}

const App = () => {

  const name = 'React';

  return (
    <div>
      <B 
        name={name}
      />
    </div>
  )
}

export default App;