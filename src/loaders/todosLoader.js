import axios from 'axios';

const todosLoader = async () => {
    const response = await axios.get('https://66baf2d46a4ab5edd636a422.mockapi.io/todos');
    return response.data;
}

export default todosLoader;