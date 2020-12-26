import React from 'react';
import classes from './App.module.css';
import Background from './containers/Background/Background';
import Main from './containers/Main/Main';
import HeaderText from './containers/HeaderText/HeaderText';
import ImageContainer from './containers/ImageContainer/ImageContainer';
import SkillsBar from './containers/Main/SkillsBar/SkillsBar';
import TextContainer from './containers/Main/TextContainer/TextContainer';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className={classes.App}>
      <HeaderText/>
      <ImageContainer/>
      <Main>
        <SkillsBar/>
        <TextContainer>
          <Project/>
        </TextContainer>
      </Main>
    </div>
  );
}

export default App;
