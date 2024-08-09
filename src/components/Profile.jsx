import { useContext, useEffect, useState } from "react";
import { NameContext } from "../App";

const Profile = () => {

    const { name, setName } = useContext(NameContext);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        setNewName(name);
    }, []);

    const handleClick = () => {
        // update the name
        setName(newName);
    }

  return (
    <div>
          <input 
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={handleClick}>Update Profile</button>  
    </div>
  )
}

export default Profile;