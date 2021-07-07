import React from 'react';
import classes from './AllProjects.module.sass';

import Main from '../../containers/Main/Main';
import TextContainer from '../../containers/Main/TextContainer/TextContainer';

import HTML from '../../Assets/html5.png';
import CSS from '../../Assets/css3.png';
import NODE from '../../Assets/node.png';
import JAVASCRIPT from '../../Assets/js.png';
import PYTHON from '../../Assets/python.png';
import REACT from '../../Assets/react.png';
import FIREBASE from '../../Assets/firebase.png';
import EC2 from '../../Assets/ec2.png';
import GITHUB from '../../Assets/github.png';
import LINKEDIN from '../../Assets/linkedin.png';

import biographicalcounselling from '../../Assets/biographicalcounselling.png';
import billfinex from '../../Assets/billfinex.png';
import bugtracker from '../../Assets/bugtracker.png';
import freefund from '../../Assets/freefund.png';

const AllProjects = () => {
    return(
        <Main>
        <TextContainer>
          <div className = {classes.Projects}>

            <div className={classes.Project} onClick = {() => window.open("https://master.d1l4h4map9o1uj.amplifyapp.com/")}>
              <h3>React + Firebase Bugtracker</h3>
              <div className={classes.Main}>
                <div className={classes.Technologies}>
                  <img src ={HTML}/>
                  <img src ={CSS}/>
                  <img src ={JAVASCRIPT}/>
                  <img src ={REACT}/>
                  <img src ={FIREBASE}/>
                </div>
                <img src = {bugtracker}/>
              </div>
              <p>While Billfinex more resembles a toy, this project more closely tried to emulate something that may have some real world use.</p>
              <p>The application features:</p>
              <ul>
                <li>Accounts</li>
                <li>A friend system</li>
                <li>The ability to create, invite friends to and administrate your projects</li>
                <li>Add bugs to a project, manage their urgency and mark them as resolved</li>
                <li>Comment on other users bugs to try and find a solution</li>
              </ul>
              <p>I learned a lot about integrating APIs into my applications while working on this project, as well as becoming comfortable with <strong>routing</strong> in React and <strong>user authentication</strong>.</p>
            </div>
            <div className={classes.Project} onClick = {() => window.open("https://main.d1og6uu514ow0q.amplifyapp.com/")}>
              <h3>Billfinex React App</h3>
              <div className={classes.Main}>
                <div className={classes.Technologies}>
                  <img src ={HTML}/>
                  <img src ={CSS}/>
                  <img src ={JAVASCRIPT}/>
                  <img src ={REACT}/>
                </div>
                <img src = {billfinex}/>
              </div>
              <p>What began as a mockup of the main page of popular cryptocurrency exchange Bitfinex became - effectively an interactive trading game. Market data is generated, and the player can place buy and sell orders on multiple coins as they attempt to make fake fortunes.</p>
              <p>I used this project as a way to become comfortable with the <strong>React framework</strong>, and my abilty to quickly conceptualise and implement React components improved significantly over the course of creating the app.</p>
            </div>
          </div>
        </TextContainer>
      </Main>
    )
}


export default AllProjects;
