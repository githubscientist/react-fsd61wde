import { Link, useLoaderData } from "react-router-dom";

const Notes = () => {

  const notes = useLoaderData();

  return (
    <div>
      <h1>Notes</h1>
      {
        notes.map(note => {
          return (
            <li key={note.id}>
              <Link to={`/notes/${note.id}`}>
                { note.title }
              </Link>
            </li>
          )
        })
      }
    </div>
  )
}

export default Notes;