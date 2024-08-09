import React, { createContext, useState } from 'react'
import Profile from './components/Profile';

export const NameContext = createContext();

const App = () => {

    const [name, setName] = useState('John Doe');

  return (
    <div>
        <NameContext.Provider value={{name, setName}}>
            <h1>Profile Name: {name}</h1>
            <Profile />      
        </NameContext.Provider>
    </div>
  )
}

export default App

/*
    Session Task: Profile Name Change
*/