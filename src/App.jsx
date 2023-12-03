import Input from './component/input/Input';
import Output from './component/output/Output';
import Query from './component/query/Query';
import Table from './component/table/Table'

import "./app.scss"
import { useState } from 'react';
import Navbar from './component/navbar/Navbar';

function App() {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [queryId, setQueryId] = useState(1);
  return (
    <div>
      <section id='Homepage'>
        <Navbar/>        
        <div className="container">
          <div className="query"><Query setQueryId={setQueryId} setValue={setValue}/></div>
          <div className="input"><Input value={value} setValue={setValue} setRows={setRows} setHeaders={setHeaders} setQuery={setQuery} setQueryId={setQueryId} queryId={queryId}/></div>
        </div>
        <Output query={query} rows={rows} headers={headers}/>
      </section>
      
      
    </div>
  );
}

export default App;
