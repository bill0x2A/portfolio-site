import React, { Component } from 'react';
import classes from './ImageContainers.module.css';
import Plinth from '../../Assets/justme.png';

class imageContainer extends Component {

    state = {
        hover : false
    }

    hoverOnHandler = () => {
        this.setState({hover:true});
    }

    hoverOffHandler = () => {
        this.setState({hover:false});
    }

    render (){
        let blockone = [classes.WhiteBlock, classes.BlockOne].join(' ');
        let blocktwo = [classes.WhiteBlock, classes.BlockTwo].join(' ');
        let plinth  = classes.Plinth;

        if(this.state.hover){
            blockone = [classes.WhiteBlock, classes.BlockOneHover].join(' ');
            blocktwo = [classes.WhiteBlock, classes.BlockTwoHover].join(' ');
            plinth = [classes.Plinth, classes.PlinthHover].join(' ');
        }
    return(
        <div
            onMouseEnter = {this.hoverOnHandler}
            onMouseLeave = {this.hoverOffHandler}
            className={classes.ImageContainer}
            >
            <img src={Plinth}></img>
            
            <div className={blockone}></div>
            <div className={blocktwo}></div>
            <div className={classes.Hi}>
                <h1>HI,</h1>
                <h1>I'M BILLY</h1>
            </div>

            <div className={plinth}/>
        </div>
    )}
}


export default imageContainer;