import React from 'react';
import classes from './App.module.css';
import Helmet from 'react-helmet';
import { withRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import CV from './Components/CV/CV';
import Navigation from './Components/Navigation/Navigation';

function App(props) {
  return (
      <div className={classes.App}>
        <Helmet>
          <title>Billy Smith Web Dev</title>
        </Helmet>
        <div className={classes.Centered}>
          <Navigation/>
          <div className={classes.Content}>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/blog' component = {Blogs} />
            <Route path = '/CV' component = {CV} />
          </div>
        </div>

      </div>
  );
}

export default withRouter(App);
