import React from 'react';
import classes from './TextContainer.module.css';

const textcontainer = (props) => {
    return (
    <div className = {classes.TextContainer}>
        <h2>MY STORY</h2>
        <p>After completing my physics degree at Bristol University in 2019,
I worked a pub and travelled the world on a motorbike for a year.</p>
<p>After writing some Python in my final year project, I knew I wanted
to learn more but didn’t want to spend more money on education.</p>
<p>I used lockdown as an oppertunity to pick up HTML, CSS and JS.
Within two months I managed to find my first two clients, and I became
familliar with Node and Express to facilitate thier needs.</p>
<p>Wanting to build more than static websites I began learning React in
July 2020 and since then I have built several show pieces to convince 
you to give me a job! </p>
{props.children}
    </div>
    )
}


export default textcontainer;