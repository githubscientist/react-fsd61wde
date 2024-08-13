export const initialState = {
  name: "",
  email: "",
  password: ""
};

export const formReducer = (state, action) => {
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