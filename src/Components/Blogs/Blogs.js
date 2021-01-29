import React from 'react';
import classes from './Blogs.module.css';
import without from '../../Assets/Without.png'
import Post from './Post/Post';
import {Switch, Route} from 'react-router-dom'
import LostInTheSnarks from './Blog/LostInTheSnarks/Blog';

const Blogs = ({match}) => {
    return (
        <Switch>
            <Route path={`${match.path}/lost-in-the-snarks`} component={LostInTheSnarks}/>
            <Route path={match.path}>
                <div className={classes.Blogs}>
                    <div className={classes.Heading}>
                        <h1>Blog ✍️</h1>
                        <img src ={without}/>
                    </div>
                    <div className={classes.Box}>
                        <p>This is where I keep everything that I've learned that I'm not ready to implement in a project of my own yet, a good place for me to store notes on topics, or just lessons learned while exploring the world of self-teaching software development.</p>
                    </div>
                    <Post
                        title="Lost in the SNARKs"
                        date="29/01/2020"
                        id="lost-in-the-snarks"
                    />
                </div>
            </Route>
        </Switch>
    )

}

export default Blogs;