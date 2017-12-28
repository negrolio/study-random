import React from 'react';

const ConstructorProjectHOC = (WrappedComponent, projectObject) => {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                project: {
                    name:"project1",
                    colums: ["title", "description", "otherThings"],
                    rows: [
                        {title:"tricoma", description: "una cosa rara que hace cosas raras", otherThings: "suele ser raros" },
                        {title:"clasismo", description: "a veces vuela mucho", otherThings: "nada raro" },
                        {title:"estela", description: "persona loca", otherThings: "hace peinados nuevos" },
                        {title:"computadoris", description: "numeros de numeros", otherThings: "tu culo" },
                        {title:"kilometraje", description: "hay ay aya", otherThings: "sale el viaje" }        
                    ]
                },
                r: {}
            }
        }

        createProjectObject = (rowsAndColumns) => {
            // for (var rowOrColumn in rowsAndColumns) {
            //     switch (rowOrColumn) {
            //         case 'columns':
            //             console.log(rowOrColumn)
            //             break;
            //         case 'rows':
            //             console.log(rowOrColumn)
            //         default:
            //             break;
            //     }
            // }
            const columns = [];
            const rows = [];
            for (var column in rowsAndColumns.columns) {
                columns.push(rowsAndColumns.columns[column])
            }
            let obj = {}
            const beto = columns.map((column, index) => {
                for (var row in rowsAndColumns.rows) {
                    for (var objectInRow in rowsAndColumns.rows[row]) {
                        //return { [column]:rowsAndColumns.rows[row][index]}
                        obj = {
                            ...obj,
                            [column]: rowsAndColumns.rows[row][objectInRow]
                        }
                        return obj;
                        // return {
                        //     ...obj,
                        //     [column]:rowsAndColumns.rows[row][index]
                        // }
                    }
                }
                //return { [column]:rowsAndColumns.rows[index]}
            })
            console.log('obj', beto)
        }

        // componentWillReceiveProps(nextProps) {
        //     this.createProjectObject(projectObject)
        // }
        render () {
            //console.log('beto', this.state.r);
            console.log('asi llega', projectObject)
            this.createProjectObject(projectObject)
            return <WrappedComponent projects={this.state.project} />
        }
    }
}

export default ConstructorProjectHOC;


const project = {
    name:"project1",
    colums: ["title", "description", "otherThings"],
    rows: [
        {title:"tricoma", description: "una cosa rara que hace cosas raras", otherThings: "suele ser raros" },
        {title:"clasismo", description: "a veces vuela mucho", otherThings: "nada raro" },
        {title:"estela", description: "persona loca", otherThings: "hace peinados nuevos" },
        {title:"computadoris", description: "numeros de numeros", otherThings: "tu culo" },
        {title:"kilometraje", description: "hay ay aya", otherThings: "sale el viaje" }        
    ]
}