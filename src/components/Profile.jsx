import { useContext, useEffect, useState } from "react";
import { NameContext } from "../App";

const Profile = () => {

    const { name, setName } = useContext(NameContext);
    

    useEffect(() => {
        document.querySelector('.nameInput').value = name;
    }, []);

    const handleClick = () => {
        // get the value from the input
        const newName = document.querySelector('.nameInput').value;

        // update the name
        setName(newName);
    }

  return (
    <div>
          <input 
              type="text"
              className="nameInput"
              name="nameInput"
        />
        <button onClick={handleClick}>Update Profile</button>  
    </div>
  )
}

export default Profile;