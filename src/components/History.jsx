const History = ({ clicks }) => {
    return (
        <p>History: { clicks.join(', ') }</p>
    )
}

export default History;