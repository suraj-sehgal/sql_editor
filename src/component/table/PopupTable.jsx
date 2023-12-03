import React from 'react'
import './popupTable.scss';

const PopupTable = ({trigger,setTrigger,tableHead,tableRow}) => {
  return (
    <div>
      {trigger &&(
        <div className="popupTable">
            <button onClick={()=>setTrigger(false)}>X</button>
            <div className="window">
              <table>
                <thead>
                  <tr>
                    {tableHead.map((item,index)=>(<th key={index}>{item}</th>))}
                  </tr>
                </thead>
                <tbody>
                  {tableRow.map((row,index)=>(
                    <tr key={index}>
                      {Object.values(row).map((item,sindex)=>(<td key={sindex}>{item}</td>))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      )}
    </div>
  )
}

export default PopupTable
