import React from 'react';
import HTML from '../../../Assets/html5.png';
import CSS from '../../../Assets/css3.png';
import NODE from '../../../Assets/node.png';
import JAVASCRIPT from '../../../Assets/js.png';
import REACT from '../../../Assets/react.png';
import ethereum from '../../../Assets/ethereum.png';
import sass from '../../../Assets/sass.png';
import classes from './SkillsBar.module.css';

const skills = () => {
    const images = [REACT, sass, ethereum, NODE];
    return (
        <div className={classes.ImageBar}>
            {images.map(image => <img src={image}/>)}
        </div>
    )
}
export default skills;