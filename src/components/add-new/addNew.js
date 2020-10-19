import React from 'react';
import './addNew.css';
import TypeSelection from './TypeSelection';

export default class AddNew extends React.Component {

    constructor() {
        super();
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <h2>Search Repose</h2>
                <input type="text" placeholder="Search here.." title="Type in a name" />
                <TypeSelection onChangeValue={this.onChangeValue}></TypeSelection>
                <ul id="myUL">
                    <li><a>Adele</a></li>
                    <li><a>Agnes</a></li>

                    <li><a>Billy</a></li>
                    <li><a>Bob</a></li>

                    <li><a>Calvin</a></li>
                    <li><a>Christina</a></li>
                    <li><a>Cindy</a></li>
                </ul>
            </React.Fragment>
        )
    }
}