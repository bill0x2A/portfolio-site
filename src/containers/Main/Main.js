import React from 'react';
import classes from './Main.module.css';
import SkillsBar from './SkillsBar/SkillsBar';
import TextContainer from './TextContainer/TextContainer';

const main = (props) => {
    return (
        <div className={classes.Main}>
            {props.children}
        </div>
    )
}

export default main;