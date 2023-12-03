import React from 'react'
import './output.scss'

const Output = ({query,rows,headers}) => {
  return (
    <div className="output">
      <div className="textContainer">
        <h2>Output</h2>
      </div>
      <div className="window">
          {query?(
            <table>
              <thead>
                  <tr>
                    {headers.map((item,index)=>(<th key={index}>{item}</th>))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row,index)=>(
                    <tr key={index}>
                      {Object.values(row).map((item,sindex)=>(<td key={sindex}>{item}</td>))}
                    </tr>
                  ))}
                </tbody>
            </table>
          ):(
          <h2>Run Query to see output here</h2>)}
          
      </div>
    </div>
  )
}

export default Output
