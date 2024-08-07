import { useState } from "react";
import Login from "./components/Login";

const App = () => {

  const [page, setPage] = useState('home');

  const toPage = (page) => (e) => {
    e.preventDefault();
    setPage(page);
  }

  const content = () => {
    if (page === 'login') {
      return <Login />
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      <a href="/login" onClick={toPage('login')}>Login</a>
      {content()}
    </div>
  )
}

export default App;