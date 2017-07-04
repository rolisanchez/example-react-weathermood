import React from 'react';

import './weather.css';

export default class Example extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            masking: false
        };

        // Write your code here :)
    }

    render() {
        return (
            <div className={`forecast weather-bg ${this.state.group}`}>
                <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
                    <h1 className='text-center'> Example component. State on Main Component is Props on Example Component: {this.props.exampleState}</h1>
                </div>
            </div>
        );
    }
}
