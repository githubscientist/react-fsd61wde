import { useEffect, useState } from "react";

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Enter your name" 
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input type="email" placeholder="Enter your email" 
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <input type="password" placeholder="Enter your password" 
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;