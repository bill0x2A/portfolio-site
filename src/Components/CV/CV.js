import React from 'react';
import classes from './CV.module.css';

const CV = props => {
    return (
        <div className={classes.CV}>
            <div className={classes.Heading}>
                <h2>Billy Smith | Front End Developer</h2>
                <p>Brentford, London</p>
                <p>07717325656</p>
                <p>billy@billysmith.net</p>
            </div>
            <div className={classes.Body}>
                <h3>Personal Profile</h3>
                <p>I have a great self drive and a passion to keep learning. After my first taste of development in my final year of university I wanted to learn more but decided against paying for more education. I took lockdown as an opportunity to learn HTML, CSS and Javascript, finding my first client for freelance work in May. Wanting to build more than static websites I began learning React in July and have since furthered my skills through a series of projects, showcased on my portfolio website.</p>
                <h3>Core Skills</h3>
                <table>
                    <tr><td><strong>Languages</strong></td><td>HTML/JSX, CSS, Javascript, Python, Solidity</td></tr>
                    <tr><td><strong>Frameworks</strong></td><td>React.js, Express, Truffle</td></tr>
                    <tr><td><strong>Other</strong></td><td>Unix/Linux, AWS, Firebase, Photoshop</td></tr>
                </table>
                <h3>Education</h3>
                <p><strong>BSc (Hons) Physics [2:1]</strong> Bristol University (2016-2019)</p>
                <p><strong>A-levels:</strong></p>
                <table>
                    <tr><td><strong>Physics</strong></td><td>A</td></tr>
                    <tr><td><strong>Mathematics</strong></td><td>B</td></tr>
                    <tr><td><strong>Psychology</strong></td><td>B</td></tr>
                </table>
                <h3>Relevant Work Experience &amp; Projects</h3>
            </div>
        </div>
    )
}

export default CV