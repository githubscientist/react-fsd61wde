import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get('https://66baf2d46a4ab5edd636a422.mockapi.io/todos');
    setTodos(response.data);
  }

  useEffect(() => {
    fetchTodos();
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