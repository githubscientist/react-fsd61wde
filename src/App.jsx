function App({ items }) {

  return (
    <div>
          <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    {
                          Object.keys(items[0]).map((topic, index) => {
                              return <td style={{ border: '1px solid black', padding: '20px' }} key={index}><strong>{ topic.toUpperCase() }</strong></td>
                        })      
                    } 
                </tr>   
            </thead>
            <tbody>
                {
                    items.map(item => {
                    return  <tr style={{ border: '1px solid black' }} key={item.id}>
                            {
                                Object.values(item).map((value, index) => {
                                    return <td style={{ border: '1px solid black', padding: '20px' }} key={index}>{ value }</td>
                                })
                            }
                        </tr>
                    })      
                }      
            </tbody>  
        </table>      
    </div>
  )
}

export default App;