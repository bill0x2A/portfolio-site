import React from 'react';
import classes from './Home.module.css';

import Main from '../../containers/Main/Main';
import HeaderText from '../../containers/HeaderText/HeaderText';
import ImageContainer from '../../containers/ImageContainer/ImageContainer';
import SkillsBar from '../../containers/Main/SkillsBar/SkillsBar';
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

const Home = () => {
    return (
      <React.Fragment>
        <div className = {classes.Heading}>
          <ImageContainer/>
          <HeaderText/>
        </div>
        <Main>
          <SkillsBar/>
          <TextContainer>
            <div className={classes.SocialContainer}>
              <img src={GITHUB} onClick = {() => window.open("https://github.com/bill0x2A")}/>
              <img src={LINKEDIN} onClick = {() => window.open("https://www.linkedin.com/in/billy-s-297b89ab/")}/>
            </div>
            <div className = {classes.Projects}>
              <h2>Featured Projects</h2>
              <div className={classes.Project} onClick = {() => window.open("https://www.biographicalcounselling.net/")}>
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
            </div>
          </TextContainer>
        </Main>
      </React.Fragment>
    )
}

export default Home;