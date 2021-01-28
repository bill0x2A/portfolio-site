import React from 'react';
import classes from './Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = props => {
    return (
        <div className={classes.Navbar}>
            <Link className ={classes.Homelink} to = '/'>Home</Link>
            <div style = {{display : 'flex'}}>
                <Link className ={classes.Bloglink} to = '/blog'>Blog</Link>
                <Link className ={classes.Bloglink} to = '/cv'>CV</Link>
            </div>
        </div>
    )
}


export default Navigation