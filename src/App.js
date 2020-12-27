import React from 'react';
import classes from './App.module.css';
import Background from './containers/Background/Background';
import Main from './containers/Main/Main';
import HeaderText from './containers/HeaderText/HeaderText';
import ImageContainer from './containers/ImageContainer/ImageContainer';
import SkillsBar from './containers/Main/SkillsBar/SkillsBar';
import TextContainer from './containers/Main/TextContainer/TextContainer';
import Project from './Components/Project/Project';

import HTML from './Assets/html5.png';
import CSS from './Assets/css3.png';
import NODE from './Assets/node.png';
import JAVASCRIPT from './Assets/js.png';
import PYTHON from './Assets/python.png';
import REACT from './Assets/react.png';
import FIREBASE from './Assets/firebase.png';
import EC2 from './Assets/ec2.png';


import biographicalcounselling from './Assets/biographicalcounselling.png';
import billfinex from './Assets/billfinex.png';
import bugtracker from './Assets/bugtracker.png';

function App() {
  return (
    <div className={classes.App}>
      <HeaderText/>
      <ImageContainer/>
      <Main>
        <SkillsBar/>
        <TextContainer>
          <div className = {classes.Projects}>
            <h2>My Projects</h2>
            <div className={classes.Project}>
              <h3>biographicalcounselling.net</h3>
              <div className={classes.Main}>
                <div className={classes.Technologies}>
                  <img src ={HTML}/>
                  <img src ={CSS}/>
                  <img src ={JAVASCRIPT}/>
                  <img src ={NODE}/>
                  <img src ={EC2}/>
                </div>
                <img src = {biographicalcounselling}/>
              </div>
              <p>I approached Jane about her website in May 2020. I worked with her over several months to create a design she loved.</p>
              <p>I substantially developed my confidence and knowledge in <strong>CSS</strong> over the course of this project, and the end product is now live, representing her counselling service.</p>
              <p>I also took the opportunity to learn how to run a containerized backend on <strong>AWS (EC2)</strong> to host the site for Jane, saving her <strong>£100 / year </strong>in hosting costs compared to her previous solution.</p>
            </div>
            <div className={classes.Project}>
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
            </div>
            <div className={classes.Project}>
              <h3>Bugtracker App</h3>
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
            </div>
          </div>
        </TextContainer>
      </Main>
    </div>
  );
}

export default App;
