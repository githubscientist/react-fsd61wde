import Hello from "./components/Hello";

function App() {

    const a = 10;
    const b = 20;

    return (
        <div>
            <Hello 
                a={a}
                b={b}
            />
            
            <Hello 
                a={5.6}
                b={4.324}
            />
        </div>
  )
}

export default App;