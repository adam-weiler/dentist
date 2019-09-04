import React from 'react';
import { Link } from 'react-router-dom';

const Procedure = () => {

    // state = {
    //     title: '...',
    //     description: '...'
    // }

    // // Pretend there is an API here:
    // componentDidMount() {
    //     console.log(`Fetching this.props.match.params.id`)
    // console.log(this.props.match.params.id);
    // }

    return(
        <>
            <h1>Procedures</h1>
            <p>Check out all these Dental procedures:</p>

            <ul>
                <li><Link to='/procedures/1'>Teeth Cleaning!</Link></li>
                <li><Link to='/procedures/2'>Cavity Filling</Link></li>
                <li><Link to='/procedures/3'>Teeth Canals!</Link></li>
            </ul>
        </>
    )
}

export default Procedure;