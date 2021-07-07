import React from 'react';
import classes from './App.module.css';
import { withRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import CV from './Components/CV/CV';
import Navigation from './Components/Navigation/Navigation';
import AllProjects from './Components/AllProjects/AllProjects';

function App(props) {
  return (
      <div className={classes.App}>
        <div className={classes.Centered}>
          <Navigation/>
          <div className={classes.Content}>
            <Switch>
              <Route exact path = '/' component = {Home}/>
              <Route path = '/blog' component = {Blogs} />
              <Route path = '/CV' component = {CV} />
              <Route path = '/projects' component ={AllProjects}/>
            </Switch>
          </div>
        </div>

      </div>
  );
}

export default withRouter(App);
