import React, { Component } from 'react';

class Procedure extends Component {
    render() {
        return(
            <>
                <h1>A Specific Procedure { this.props.match.params.id }</h1>
                <p>......</p>
            </>
        );
    }
}

export default Procedure;