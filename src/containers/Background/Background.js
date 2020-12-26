import React from 'react';
import classes from './Background.module.css';

const background = () => {
    return (
        <div className={classes.Background}>
            <div className={classes.Left}></div>
            <div className={classes.Right}></div>
        </div>
    )
}

export default background;