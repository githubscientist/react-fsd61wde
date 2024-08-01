function App({ notes }) {

  return (
      <div>
        <h1>Notes</h1>
        <ul>
            {
                notes.map((note) => {
                    return <li>{ note.content }</li>
                })      
            }
        </ul>      
    </div>
  )
}

export default App;