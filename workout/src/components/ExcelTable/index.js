import React, { Component } from 'react';
import PropTypes from 'prop-types';

const headers = [
    "Book", "Author", "Language", "Published", "Sales"
];

const data = [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954–1955", "150 million"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
    ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"]
];

const propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.string
    ),
    data: PropTypes.arrayOf(
        PropTypes.string
    )
};
        
export default class ExcelTable extends Component{
    constructor(props) {
        super();

        this.state = {
            headers: headers,
            data: data,
            sortby: null,
            descending: false
        }
    }

    handleSort = (event) => {       
        let column = event.target.cellIndex,
        data = this.state.data.slice(), // copy the data
        descending = this.state.sortby === column && !this.state.descending;

        data.sort(function(a, b) {
            return descending ? (a[column] < b[column] ? 1:-1) : (a[column] > b[column] ? 1:-1);
        });

        this.setState({
            data: data,
            sortby: column,
            descending: descending
        })
    }
              
    render() {
        const arrowUp = '\u2191',
            arrowDown = ' \u2193',
            arrow = this.state.descending ? arrowUp : arrowDown;

        return (
            <React.Fragment>
                <table className="excel"> 
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

                    <tbody>
                        {this.state.data.map((row, index) => (
                            <tr key={index}>
                                {row.map((item, i) => (
                                    <td key={i}>{ item }</td>
                                ))}
                            </tr>
                        ))}
                    </tbody> 
                </table>    
            </React.Fragment>      
        )  
    }    
}
                        
ExcelTable.propTypes = propTypes;
