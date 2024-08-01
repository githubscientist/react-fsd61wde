function App({ notes }) {

  return (
      <div>
        <h1>Notes</h1>
        <ul>
            {
                notes.map((note, index) => {
                    return <li key={index}>{ note.content }</li>
                })      
            }
        </ul>      
    </div>
  )
}

export default App;