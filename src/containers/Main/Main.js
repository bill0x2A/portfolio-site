import React from 'react';
import classes from './Main.module.css';
import SkillsBar from './SkillsBar/SkillsBar';
import TextContainer from './TextContainer/TextContainer';
import FadeIn from 'react-fade-in';

const main = (props) => {
    return (
        <div className={classes.Main}>
            <FadeIn delay ={100}>
                {props.children}
            </FadeIn>
        </div>
    )
}

export default main;