import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import {
  List,
  Header,
  Button,
  Segment,
  Icon,
  Responsive,
  Form
} from "semantic-ui-react";

class AddComment extends Component {
    state = {}
  
    // handleInputChange= (e) => {
    //   const name = e.target.name
    //   const value = e.target.value
    //   this.setState({
    //       [name]: value
    //   })
    // }
  
    // setCategory = (e, data) => {
    //   this.setState({ postCategory: data.value });
    // };
  
    // submitChanges = () => {
    //   const { postId, postCategory, postTitle, postBody, postAuthor } = this.state
    //   const date = new Date();
    //   const post = {
    //       id: postId,
    //       category: postCategory,
    //       title: postTitle,
    //       body: postBody,
    //       author: postAuthor,
    //       timestamp: date.getTime()
    //   }
    //   console.log(post);
    //   //add post from the api and to the backend
    //   this.props.addNewPost(post)
    //   .then(()=>{
    //     this.props.history.push("/"); ///this takes us back to the Home Page
    //   })
      
    // }
  
    render() {
      return (
          <div>  
            <h3>
              Add comment
            </h3>    
                        {/* <br/>
            <Form onSubmit={this.submitChanges}>
                <Form.Select
                    required
                    name="postCategory"
                    id="post-category"
                    value={this.state.postCategory}
                    onChange={this.setCategory}
                    label="Post Category: "
                    placeholder="Category"
                    options={options}
                />
                        <br/>   

                  <Form.Input
                      required
                      name="postId"
                      id="post-id"
                      value={ this.state.postId }
                      onChange={this.handleInputChange}
                      label="Post Id: "
                      placeholder="Post Id"
                  />      
  
                          <br/>
  
                  <Form.Input
                      required
                      name="postTitle"
                      id="post-title"
                      value={ this.state.postTitle }
                      onChange={this.handleInputChange}
                      label="Post Title: "
                      placeholder="Post Title"
                  />
                                  <br/>
  
                  <Form.Input
                      required
                      name="postBody"
                      id="post-body"
                      value={ this.state.postBody }
                      onChange={this.handleInputChange}
                      label="Post Body: "
                      placeholder="Post Body"
                  />
  
                                  <br/>
  
                  <Form.Input
                      required
                      name="postAuthor"
                      id="post-author"
                      value={ this.state.postAuthor }
                      onChange={this.handleInputChange}
                      label="Post Author: "
                      placeholder="Post Author"
                  />
  
                  <Form.Button
                    name="form-button-control-public"
                    color="teal"
                    compact
                    size="large"
                  >
                        <Icon name="save" />
                        Save Changes
                  </Form.Button>
  
              </Form>         */}
          </div>
      );
    }
  }
  
  //Give the EditPost page access to the redux store state for receivePosts.
  //Pass reducers directly into mapStateToProps (instead of the state), so we need less code.
  const mapStateToProps = ({ posts }) => ({
    posts
  })
  
  //Imported all actions from action folder. Pass actions into connect,
  //so they can be accessed via this.props and a mapDispatchToProps function isn't needed.
  export default connect(mapStateToProps, actions)(AddComment);