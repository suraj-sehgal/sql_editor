import React from 'react'
import "./outputTable.scss"

const OutputTable = ({rows,headers}) => {
  return (
    <table className='tableContainer'>
        <thead>
            <tr className='row'>
                {headers.map((header,index)=>(<th key={index}>{header}</th>))}
            </tr>
        </thead>
        <tbody>
            {rows.map((row_value,index)=>(
                <tr className='row' key={"tr-"+index}>
                    {Object.values(row_value).map((item,sindex)=>(
                        <td key={"td-"+sindex}>{item}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default OutputTable
