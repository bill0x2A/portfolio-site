import React from 'react';
import classes from './Post.module.css';
import {withRouter, Link} from 'react-router-dom';

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <Link to = {props.match.url + '/' + props.id}>
                Read
            </Link>
        </div>
    )
}

export default withRouter(Post)