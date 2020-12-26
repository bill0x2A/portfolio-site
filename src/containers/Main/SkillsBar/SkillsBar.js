import React from 'react';
import HTML from '../../../Assets/html5.png';
import CSS from '../../../Assets/css3.png';
import NODE from '../../../Assets/node.png';
import JAVASCRIPT from '../../../Assets/js.png';
import PYTHON from '../../../Assets/python.png';
import REACT from '../../../Assets/react.png';
import classes from './SkillsBar.module.css';

const skills = () => {
    const images = [HTML, CSS, JAVASCRIPT, NODE, PYTHON, REACT];
    return (
        <div className={classes.ImageBar}>
            {images.map(image => <img src={image}/>)}
        </div>
    )
}
export default skills;