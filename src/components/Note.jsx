import { useLoaderData, useParams } from "react-router-dom";

const Note = () => {

    const notes = useLoaderData();
    const notesId = useParams();

    const note = notes.find(note => note.id === parseInt(notesId.notesId));

  return (
      <div>
        <h1>Note</h1>
        <p><strong><em>{note.title}</em></strong>: <em>{note.content}</em></p>
    </div>
  )
}

export default Note;