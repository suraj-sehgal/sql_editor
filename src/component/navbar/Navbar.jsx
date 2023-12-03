import React, { useState } from 'react'
import Table from "../table/Table.jsx"
import './navbar.scss'

const Navbar = () => {
  const [open,setOpen] = useState(false)

  const handleClick = () =>{
    setOpen(true);
  }

  return (
    <div>
      <div className='navbar'>
          <h1>SQL Editor</h1>
          <div className="table" onClick={handleClick}>
              <img src="/table.png" alt="" />
              <a >Table</a>
          </div>
      </div>
      {open && <Table setOpen={setOpen} />}
    </div>
  )
}

export default Navbar
