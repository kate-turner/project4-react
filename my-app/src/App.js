import React, { Component } from 'react';
import MainContainer from './MainContainer';
import Posts from './MainContainer/Posts';
// import CreatePost from './CreatePost';
import { Route, Switch, Link } from 'react-router-dom';
//import { Button } from 'reactstrap';


const My404 = () => {
  return (
    <div>
      You're Lost
    </div>
    )
};

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ MainContainer } />
        <Route exact path="/posts" component={ Posts } />
        <Route component={My404} />
      </Switch>
    </main>
    )
};



export default App;
