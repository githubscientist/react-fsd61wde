export const initialState = {
  count: 0,
  clicks: []
};

export function reducer(state, action) {
  // reducer function is called when dispatch is called
  // action will point to the object that is passed in dispatch
  // state argument will be the current state of the component
  // expected from reducer function is to return the new state
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
        clicks: [...state.clicks, 'INC']
      };
    
    case 'DECREMENT':
      return {
        count: state.count - 1,
        clicks: [...state.clicks, 'DEC']
      };
    
    case 'RESET':
      return {
        count: 0,
        clicks: [...state.clicks, 'RES']
      };
  }
}