import { useEffect, useState } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value
    });
  }

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value
    });
  }

  const handlePasswordChange = (e) => {
    setFormData({
      ...formData,
      password: e.target.value
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