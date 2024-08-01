function App({ notes }) {

    // create an array of React list items
    const notesList = [];

    for (let i = 0; i < notes.length; i++){
        notesList.push(<li>{ notes[i].content }</li>);
    }

    console.log(notesList);

  return (
      <div>
        <h1>Notes</h1>
        <ul>
            {
                notesList      
            }
        </ul>      
    </div>
  )
}

export default App;