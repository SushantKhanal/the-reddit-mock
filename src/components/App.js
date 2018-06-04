import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../components/home_page';
import AddPost from '../components/add_post';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/addPost" component={AddPost}/>
      </Switch>  
    );
  }
}

export default App;