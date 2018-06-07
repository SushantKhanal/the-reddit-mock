import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../components/home_page';
import AddPost from '../components/add_post';
import EditPost from '../components/edit_post';
import PostDetail from '../components/post_detail';
import "../App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/addPost" component={AddPost}/>
        <Route exact path="/editPost/:postId" component={EditPost}/>
        <Route exact path="/postDetail/:postId" component={PostDetail}/>
      </Switch>  
    );
  }
}

export default App;
