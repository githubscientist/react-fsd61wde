import axios from "axios";

const notesLoader = async () => {
    const notes = await axios.get('/data/notes.json');
    return notes.data.notes;
}

export default notesLoader;