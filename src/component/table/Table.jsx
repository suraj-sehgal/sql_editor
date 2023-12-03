import React, { useState } from 'react'
import './table.scss'
import PopupTable from './PopupTable'
import GetTableData from '../getTableData';

const Table = ({setOpen}) => {
  const [trigger,setTrigger] = useState(false);
  const [tableHead,setTableHead]=useState([]);
  const [tableRow, setTableRow] = useState([]);

  const handleClick =(e)=>{
    let queryId = e.currentTarget.id;
    queryId=parseInt(queryId,10)
    const {tableHeaders,tableRows} = GetTableData(queryId);
    setTableHead(tableHeaders);
    setTableRow(tableRows);
    setTrigger(true);
  }

  return (
    <div className="super">
      <div className="parent">
        <div className="container">
          <h3 >Data</h3>
          <button onClick={()=>setOpen(false)}>X</button>
        </div>
        <div className="buttons" id='1' onClick={handleClick}>
          <img src="/table.png" alt="" />
          <h3 style={{backgroundColor:"transparent"}}>Customers</h3>
        </div>
        <div className="buttons" id='2' onClick={handleClick}>
          <img src="/table.png" alt="" />
          <h3 style={{backgroundColor:"transparent"}}>Products</h3>
        </div>
        <div className="buttons" id='3' onClick={handleClick}>
          <img src="/table.png" alt="" />
          <h3 style={{backgroundColor:"transparent"}}>Suppliers</h3>
        </div>
      </div>
      <PopupTable trigger={trigger} setTrigger={setTrigger} tableHead={tableHead} tableRow={tableRow} />
    </div>
  )
}

export default Table
