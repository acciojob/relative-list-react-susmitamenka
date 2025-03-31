import React from 'react'

const App = () => {
  const relatives =["Riya","Raj","Meena","Shiva"]
  return (
    <div id="main">
               {/* Do not remove the main div */}
    <ol key={"relativeList"}>{relatives.map((name,index)=>(
                <li key={`relativeListItem${index+1}`}>{name}</li>
               ))}
               </ol>
    </div>
  )
}

export default App
