const Status = ({ setUser }) => {

    const handleClick = () => {
        setUser('Prakash');
    }
    
  return (
      <div>
        <button onClick={handleClick}>update</button>
      </div>
  )
}

export default Status;