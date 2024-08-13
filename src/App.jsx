import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: ""
};

const formReducer = (state, action) => {
  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: action.payload
    }
  } else if (action.type === 'SET_EMAIL') {
    return {
      ...state,
      email: action.payload
    }
  } else if (action.type === 'SET_PASSWORD') {
    return {
      ...state,
      password: action.payload
    }
  }
  return state;
}

const App = () => {

  const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleNameChange = (e) => {
    dispatch({
      type: 'SET_NAME',
      payload: e.target.value
    });
  }

  const handleEmailChange = (e) => {
    dispatch({
      type: 'SET_EMAIL',
      payload: e.target.value
    });
  }

  const handlePasswordChange = (e) => {
    dispatch({
      type: 'SET_PASSWORD',
      payload: e.target.value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Enter your name" 
            value={formData.name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input type="email" placeholder="Enter your email" 
            value={formData.email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <input type="password" placeholder="Enter your password" 
            value={formData.password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;