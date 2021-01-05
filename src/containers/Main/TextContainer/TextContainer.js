import React from 'react';
import classes from './TextContainer.module.css';

const textcontainer = (props) => {
    return (
    <div className = {classes.TextContainer}>
        <h2>MY STORY</h2>
        <p>After completing my physics degree at Bristol University in 2019,
I worked at a pub and went travelling until the COVID-19 pandemic began.</p>
<p>After writing a crucial part of my final year project in Python, I knew I wanted
to learn more but didn’t want to spend more money on education.</p>
<p>I used lockdown as an opportunity to pick up HTML, CSS and JS.
Within two months, I managed to find my first two clients and I became
familliar with Node and Express to facilitate their needs.</p>
<p>Wanting to build more than static websites, I began learning React in
July 2020 and since then I have furthered my skills through a series of projects - showcased below.</p>
{props.children}
    </div>
    )
}


export default textcontainer;