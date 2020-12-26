import React, { Component } from 'react';
import classes from './Project.module.css';
import billfinex from '../../Assets/billfinex.png';
import biographicalcounselling from '../../Assets/biographicalcounselling.png';

class Project extends Component {

    state = {
        hover : false
    }

    hoverOnHandler = () => {
        console.log("RunningOnHandler");
        this.setState({hover:true});
    }

    hoverOffHandler = () => {
        console.log("RunningOffHandler");
        this.setState({hover:false});
    }


    render (){
        let bottomRowClass = classes.BottomRow;
        let imageClass = null;
        if(this.state.hover){
            console.log("Active class applied")
            bottomRowClass = [classes.BottomRow, classes.Active].join(' ');
        }
    return (
        <div
            onMouseEnter = {this.hoverOnHandler}
            onMouseLeave = {this.hoverOffHandler}
            className={classes.Project}
            >
            <img className = {this.state.hover ? classes.Blur : null} src={billfinex}></img>
            <div className = {bottomRowClass}>
                <h3>Billfinex</h3>
                <a href ="http://billfinex.billysmith.net"><div className={classes.SeeLive}><h4>View Live</h4></div></a>
            </div>
        </div>
    )}
}

export default Project;