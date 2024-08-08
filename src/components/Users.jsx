import { useLoaderData } from "react-router-dom";
import './Users.css';

const Users = () => {

  const users = useLoaderData();

  return (
    <div>
      <h1>Users</h1>
      <table className="users-table">
        <thead>
          <tr>
            {
              Object.keys(users[0]).map(key => (
                <th key={key}>{key}</th>  
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            users.map((user, index) => (
              <tr key={index}>
                {
                  Object.keys(user).map(key => (
                    <td key={key}>{user[key].toString()}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users;