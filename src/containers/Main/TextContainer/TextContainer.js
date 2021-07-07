import React from 'react';
import classes from './TextContainer.module.css';

const textcontainer = (props) => {
    return (
    <div className = {classes.TextContainer}>
        {props.children}
    </div>
    )
}


export default textcontainer;