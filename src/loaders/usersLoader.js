import axios from "axios";

const usersLoader = async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    return users.data;
}

export default usersLoader;