function Note({ note }) {

    const handleClick = () => console.log(`${note.content}`)

    return <li onClick={handleClick}>
        { note.content } { note.important && '✦' }
    </li>
}

export default Note;