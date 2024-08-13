import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Todos = () => {

    const todos = useLoaderData();
    const [newTodo, setNewTodo] = useState('');
    const [isDone, setIsDone] = useState(false);
    const navigate = useNavigate();

    const handleAddTodo = (e) => {
        e.preventDefault();
        
        // make an api request to create a new todo
        axios.post(`https://66baf2d46a4ab5edd636a422.mockapi.io/todos`, {
            content: newTodo,
            isDone: isDone
        })
            .then(response => {
                alert('Todo added successfully');

                // clear the form
                setNewTodo('');
                setIsDone(false);

                navigate('/'); // refresh the page
            })
            .catch(error => {
                alert('Adding todo failed');
            });
    }

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
    
    <form onSubmit={handleAddTodo}>
        <input 
            type="text" 
            placeholder="Add todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
        />
        <select
            value={isDone}
            onChange={(e) => setIsDone(e.target.value)}
        >
            <option>False</option>
            <option>True</option>
        </select>
        <button type="submit">Add Todo</button>      
    </form>

    </div>
  )
}

export default Todos;