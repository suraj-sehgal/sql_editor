export default function GetTableData(queryId){
    let tableData = [];
    if(queryId===1){
        tableData = require('./data/customers.json');
    }
    else if(queryId===3){
        tableData = require('./data/suppliers.json')
    }
    else if(queryId===2){
        tableData = require('./data/product.json');
    }
    else if(queryId===4){
        tableData = require('./data/select-customers.json');
    }
    
    // console.log(tableData);
    let tableHeaders = [];
    let tableRows = [];
    for(var i=0;i<tableData.length;i++){
        let row = tableData[i];
        if(i===0){
            for(const item in row){
                tableHeaders.push(row[item]);
            }
        }
        else{
            tableRows.push(row);
        }
    }

    return {tableHeaders,tableRows};
}