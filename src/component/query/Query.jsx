import React from 'react'
import "./query.scss"

const Query = ({setQueryId,setValue}) => {
  const queryValue = [
    {
      query: "select * from customers;",
      queryId: 1,
    },
    {
      query: "select contact_name, address,city,postal_code, country from customers limit 18;",
      queryId: 4,
    },
    {
      query: "select * from products;",
      queryId: 2,
    },
    {
      query: "select * from suppliers;",
      queryId: 3,
    },
  ];

  const handleClick = (item) => {
    setQueryId(item.queryId);
    setValue(`${item.query}`);
  };

  return (
    <div className="query">
      <div className="textContainer">
        <h1>Available Queries</h1>
      </div>
      <div className="queryContainer">
        {queryValue.map((item,index)=>(<p className='querysection' key={index}  onClick={() => handleClick(item)}>{item.query}</p>))}
      </div>
    </div>
  )
}

export default Query
