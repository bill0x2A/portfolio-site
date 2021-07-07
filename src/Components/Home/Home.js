import React from 'react';
import classes from './Home.module.css';

import Main from '../../containers/Main/Main';
import HeaderText from '../../containers/HeaderText/HeaderText';
import ImageContainer from '../../containers/ImageContainer/ImageContainer';
import SkillsBar from '../../containers/Main/SkillsBar/SkillsBar';
import TextContainer from '../../containers/Main/TextContainer/TextContainer';
import Story from '../Story/Story';

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
import moonwolf from '../../Assets/moonwolf.png';

import biographicalcounselling from '../../Assets/biographicalcounselling.png';
import billfinex from '../../Assets/billfinex.png';
import bugtracker from '../../Assets/bugtracker.png';
import freefund from '../../Assets/freefund.png';
import sass from '../../Assets/sass.png';
import ethereum from '../../Assets/ethereum.png';


import FadeIn from 'react-fade-in';

import { InlineIcon } from '@iconify/react';
import arrowUpRight from '@iconify-icons/carbon/arrow-up-right';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <FadeIn delay ={100}>
        <div className = {classes.Heading}>
          <ImageContainer/>
          <HeaderText/>
        </div>
        <Main>
          <SkillsBar/>
          <TextContainer>
            <Story/>
            <div className={classes.SocialContainer}>
              <img src={GITHUB} onClick = {() => window.open("https://github.com/bill0x2A")}/>
              <img src={LINKEDIN} onClick = {() => window.open("https://www.linkedin.com/in/billy-s-297b89ab/")}/>
            </div>
            <div className = {classes.Projects}>
              <h2>Featured Projects</h2>
              <div className={classes.Project} >
                <h3>Moonwolf.io</h3>
                <div className={classes.Main}>
                  <div className={classes.Technologies}>
                    <img src ={REACT}/>
                    <img src ={ethereum}/>
                    <img src ={sass}/>
                    <img src={NODE} />
                  </div>
                  <img src = {moonwolf} onClick = {() => window.open("https://www.moonwolf.io/")}/>
                </div>
                <p>I was asked to be the lead web developer for the Moonwolf.io project through friends I made at EthDenver. From Feburary to June 2021 I undertook many tasks in this role:</p>
                <ul>
                  <li>Created a frontend from scratch for a <a href={"https://farm.moonwolf.io/"}>yield farm </a>in React, allowing users to stake cryptocurrency to earn interest in a native token. This farm contained over $2m worth of funds at its peak.</li>
                  <li>Built a <a href={"https://nft.moonwolf.io/"}>store</a> frontend to sell NFTs, creating a new stream of income for the project and partnered artists.</li>
                  <li>Wrote a Node.js program to periodically fetch blockchain and market data, including by webscraping.</li>
                  <li>Created a professional <a href={"https://moonwolf.io/"}>landing page </a>for the project.</li>
                </ul>
                <p>This role required constant revaluation of project goals according to community requests. My confidence as an independent developer grew significantly over the course of this project, alongside my technical ability in React app structuring. I was also introduced to Agile work environments.</p>
              </div>
              <div className={classes.Project} onClick = {() => window.open("https://devfolio.co/submissions/freefund-e3ca")}>
                <h3>Freefund</h3>
                <div className={classes.Main}>
                  <div className={classes.Technologies}>
                    <img src ={REACT}/>
                    <img src ={ethereum}/>
                    <img src ={CSS}/>
                  </div>
                  <img src = {freefund}/>
                </div>
                <p>I entered the EthDenver 2021 Hackathon, and made it into the final with Freefund - a cryptocurrency based crowdfunding dapp. I ran a live demo for conferance attendees and judges including the SEC commissioner for Colorado. We placed 7th overall and gained a runner up prize from a venture capital firm.</p>
                <p>I gained significant experience with <strong>React</strong> and the <strong>Ethers.js</strong> library over the course of this project, as well as collaborative app design and development.</p>
              </div>
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
            </div>
            <Link to={'/projects'}>
              <button>More Projects <InlineIcon icon={arrowUpRight}/></button>
            </Link>
          </TextContainer>
        </Main>
      </FadeIn>
    )
}

export default Home;