
function NormalizeDataToPlay (rowsAndColumns) {

    const columns = [];
    const rows = [];
    let modelRow = {};
    for (var column in rowsAndColumns.columns) {
        columns.push(rowsAndColumns.columns[column])
        modelRow[rowsAndColumns.columns[column]] = {}
    }
    for (var row in rowsAndColumns.rows) {
        const finalRow = Object.assign({},modelRow);
        const eachRow = rowsAndColumns.rows[row];
        Object.getOwnPropertyNames(eachRow).forEach((val,idx)=>{
            finalRow[columns[idx]] = eachRow[idx]
        })
        rows.push(finalRow);
    }
    return {
        project: {
            name:"project1",
            colums: columns,
            rows: rows
        }
    }
}

export default NormalizeDataToPlay;
