import React from 'react';
import classes from './Blogs.module.css';
import without from '../../Assets/Without.png'
const Blogs = props => {
    return (
        <div className={classes.Blogs}>
            <div className={classes.Heading}>
                <h1>Blog</h1>
                <img src ={without}/>
            </div>
            <div className={classes.Box}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet blandit massa, eu mollis felis cursus eu. Nam faucibus mi ex, sit amet volutpat sem elementum mattis. In placerat tempus tempus. Duis ut molestie ipsum. Curabitur quis convallis eros. Mauris sodales purus nec urna vulputate, sed vulputate eros aliquet. Proin vel purus justo.</p>
            </div>
        </div>
    )
}

export default Blogs;