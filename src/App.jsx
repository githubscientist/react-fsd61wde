import { useEffect, useState } from "react";

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fetch all the todos from the server
    fetch(`https://66baf2d46a4ab5edd636a422.mockapi.io/todos`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
  }, []);

  return (
    <div>
      <h1>Todo App</h1>

      <ul>
        {
          todos.map(todo => {
            return (
              <li key={todo.id}>
                {todo.content}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App;