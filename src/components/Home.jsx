import { Link } from "react-router-dom";

const Home = () => {

    const padding = {
        padding: 5
    }

  return (
    <div>
        <ul>
            <li style={padding}>
                <Link to="/">Home</Link>       
            </li>
            <li style={padding}>
                <Link to="/notes">Notes</Link>
            </li>
            <li style={padding}>
                <Link to="/users">Users</Link>
            </li>
          </ul>
          
          <div>
            <i>&copy;Notes Application, Guvi Geeks Networks Pvt. Ltd.</i>
          </div>
    </div>
  )
}

export default Home;