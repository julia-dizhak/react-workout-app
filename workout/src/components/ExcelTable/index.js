import React, { Component } from 'react';
import PropTypes from 'prop-types';

const headers = [
    'id', 'date', 'workout name', 'duration (m)', 'distance (km)', 'speed (km/h)', 'repetions'
];

const URL = 'https://workout-cd790.firebaseio.com/workouts.json';

// example of data stucture
// {
//     "workouts": [
//     [3, "05.05", "Running", "34:23:09", 4.40, 7.49, "-"],
//     [3, "05.05", "Running", "35:44:6", 4.53, 7.54, "-"],
//     [3, "02.05", "Spinning", 60, "-" , "-", "-"],
//     [2, "31.04", "Running", "36:03:07", 5.11, 7.03, "-"],
//     [1, "30.04", "Spinning", 60, "-", "-", "-"],
//     [1, "29.04", "Hiking", "-", 20, "-", "-"]
//   ]
// }

const propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.string
    ),
    workouts: PropTypes.arrayOf(
        PropTypes.string
    )
};
        
export default class ExcelTable extends Component{
    constructor(props) {
        super();

        this.state = {
            headers: headers,
            workouts: [],
            //workouts: workouts,
            sortby: null,
            descending: false,
            message: 'bla',
            edit: null // {row: index, cell: index}
        }
    }

    componentDidMount() {
        fetch(URL) // call the fetch function passing the url of the API as a parameter
            .then((response) => response.json()) // transform the data into json
            .then((data) => {
                // code for handling the data you get from the API
                let workouts = data; // get the results
                console.log(workouts);

                // calculateSpeed() {
                //     let workouts = this.state.workouts.slice;
                //     console.log(workouts);
                //     let distance = workouts[4];
                //     //let duration = 
                //     // speed = distance / duration
                // }
                this.setState({workouts: workouts});
            })
            .catch(function(error) {
                // this is where you run code if the server returns any errors
                console.log(error);
            });
    }

    handleSort = (event) => {       
        let column = event.target.cellIndex,
        workouts = this.state.workouts.slice(), // copy the data
        descending = this.state.sortby === column && !this.state.descending;

        workouts.sort(function(a, b) {
            return descending ? (a[column] < b[column] ? 1:-1) : (a[column] > b[column] ? 1:-1);
        });

        this.setState({
            workouts: workouts,
            sortby: column,
            descending: descending
        })
    }

    // handlePost = (event) => {
    //     fetch(
    //         postUrl,
    //         {
    //             mode: 'no-cors',
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 'name': Math.random()
    //             }),
    //             headers: new Headers({ 'Content-Type' : 'image/jpeg', 'Accept-Charset' : 'utf-8', 'X-My-Custom-Header' : 'Zeke are cool' })
    //         }
    //     )
    //     .then((response) => response.text()) // transform the data into json
    //     .then((data) => {
    //         // debugger;
    //         this.setState(
    //             {message: Math.random()}
    //         )
    //     })
    // }

    handleShowEditor = (event) => {
        this.setState({
            edit: {
                row: parseInt(event.target.dataset.row, 10),
                cell: event.target.cellIndex
            }
        });
    }

    // saving the content changes after the customer is done typing and have submitted the form (via the Enter button).
    handleSave = (event) => {
        event.preventDefault();
        let input = event.target.firstChild; // input
        //console.log(input);

        let workouts = this.state.workouts.slice();
        workouts[this.state.edit.row][this.state.edit.cell] = input.value;

        this.setState({
            edit: null, // done editing 
            workouts: workouts
        });
    }
              
    render() {
        const arrowUp = '\u2191',
            arrowDown = ' \u2193',
            arrow = this.state.descending ? arrowUp : arrowDown;

        let content = <form onSubmit={this.handleSave}><input type='text' /></form>;

        return (
            <React.Fragment>
                <div className="todo">
                    TODO:
                    <ul>
                        <li>Add posibility to add user</li>
                        <li>Add autentification</li>
                        <li>Post user data</li>
                        <li>...</li>
                    </ul>    
                </div>    

                <div className="todo">
                    Legend:
                    <ul>
                        <li>Spinning - indoor cycling</li>
                        <li>Repetions - the axction of repeating</li>
                    </ul>    
                </div> 

                <div className="excel">
                    <div>2018</div>
                    <table > 
                        <thead>
                            <tr>    
                                {this.state.headers.map((title, index) => (
                                    <th 
                                        onClick={this.handleSort}
                                        key={index}>       
                                        { this.state.sortby === index ? title + arrow :  title  }
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody
                            onDoubleClick={this.handleShowEditor}>
                            {this.state.workouts.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, index) => (
                                        <td 
                                            key={index}
                                            data-row={rowIndex}>
                                            {/* { content }
                                            { cell } */}
                                            { this.state.edit && this.state.edit.row === rowIndex && this.state.edit.cell === index ? content : cell  }
                                        </td>
                                    ))}
                                </tr>

                                // as object
                                // <tr key={index}>
                                //     <td>{ item.id }</td>
                                //     <td>{ item.name }</td>
                                //     <td>{ item.date }</td>
                                //     <td>{ item.duration }</td>
                                // </tr>
                            ))}
                        </tbody> 
                    </table> 
                </div>     

                {/* <div>
                    { this.state.message }
                    <button onClick={this.handlePost}>click</button>
                </div>      */}
            </React.Fragment>      
        )  
    }    
}
                        
ExcelTable.propTypes = propTypes;
