import { useParams } from "react-router-dom";

const About = () => {

  const { userId } = useParams();

  return (
      <div>
        <h1>About</h1>
        <p>Welcome to the About page!</p>
        <p>Here is the user ID: {userId}</p>
    </div>
  )
}

export default About;