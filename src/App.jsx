import Note from "./components/Note";

function App({ notes }) {

  return (
      <div>
        <h1>Notes</h1>
        <ul>
            {
                notes.map(note => {
                    return <Note 
                        note={note}
                        key={note.id}
                    />
                })      
            }
        </ul>      
    </div>
  )
}

export default App;