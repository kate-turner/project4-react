import React, { Component } from 'react';
import MainContainer from './MainContainer';
import Posts from './MainContainer/Posts';

import { Route, Switch, Link } from 'react-router-dom';

import CreatePost from './MainContainer/CreatePost';


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
        <Route exact path="/new" component={ CreatePost} />


        <Route component={My404} />
      </Switch>
    </main>
    )
};



export default App;
