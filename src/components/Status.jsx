const Status = ({ user }) => {
    
  return (
    <h1>{ user || 'Guest' } has logged in!</h1>
  )
}

export default Status;