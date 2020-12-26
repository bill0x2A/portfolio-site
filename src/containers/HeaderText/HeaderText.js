import React from 'react';
import classes from './HeaderText.module.css';

const headertext = (props) => {
    return (
        <div className={classes.HeaderText}>
            <h1>HI,</h1>
            <h1>I'M BILLY</h1>
            <br/>
            <h2>SELF TAUGHT</h2>
            <h2>WEB DEVELOPER</h2>
            <h2>&amp; DESIGNER</h2>
        </div>
    )
}

export default headertext;