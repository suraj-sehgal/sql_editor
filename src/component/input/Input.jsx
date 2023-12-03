import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";

import './input.scss'
import GetTableData from '../getTableData';

const Input = ({value,setValue,setQuery,setRows,setHeaders,setQueryId,queryId}) => {
  const reset = ()=>{
      setQuery("");
      setValue("select * from customers;");
      setQueryId(1);
      setHeaders([]);
      setRows([]);
  }

  const runQuery= ()=>{
      setQuery(value);
      const {tableHeaders,tableRows}=GetTableData(queryId);
      setHeaders(tableHeaders);
      setRows(tableRows);
      console.log(tableHeaders)
  }

  return (
    <div className="input">
      <div className="runBar">
        <div className="textContainer">
          <h3>Input</h3>
        </div>
        {/* <div className="space" ></div> */}
        <div className="buttons">
          <button onClick={reset}><img  style={{width:"50px"}} src="/reset.png" alt="" /></button>
          <button onClick={runQuery}><img style={{width:"50px"}} src="/run.png" alt="" /></button>
        </div>
      </div>

      <div className="textArea">
        <AceEditor
          id="editor"
          aria-label="editor"
          mode="mysql"
          theme="sqlserver"
          name="editor"
          width="100%"
          fontSize={18}
          minLines={15}
          maxLines={10}
          showPrintMargin={false}
          showGutter
          placeholder="Select your query ..."
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={value}
          onChange={(value) => setValue(value)}
          showLineNumbers
        />
      </div>
    </div>
  )
}

export default Input
