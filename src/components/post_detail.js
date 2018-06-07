import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Timestamp from "react-timestamp";

import {
    List,
    Header,
    Button,
    Segment,
    Icon,
    Responsive,
    Form
  } from "semantic-ui-react";

class PostDetail extends Component {
    state = {}
    componentDidMount(){
        const { postId } = this.props.match.params
        this.props.receivePostById(postId)
        .then(posts => {
            this.setState({
                postId: posts.posts.id,
                postCategory: posts.posts.category,
                postTitle: posts.posts.title,
                postBody: posts.posts.body,
                postAuthor: posts.posts.author
            })
        })
    }

    thumbsUp(postId, option) {
        this.props.votePost(postId, option);
    }
  
    thumbsDown(postId, option) {
        this.props.votePost(postId, option);
    }
    
    render() {
        const { posts } = this.props.posts;
      return (
          <div className="page-wrapper">
          <div className="content-wrapper">
            <h1>Post Details</h1>
            <div className="post-container">
              {/*Check if posts exist, then filter over the posts, sort the posts,
            and map over the posts, to display them on the HomePage*/
              posts &&
                      <Segment color="teal" raised>
                        <List.Item>
                          <List.Content>
                            <List.Header>{posts.title}</List.Header>
                            <List.Content className="author">
                              <Icon name="user" color="teal" size="large" />
                              {posts.author}
                            </List.Content>
                            <List.Content className="time">
                              <Icon name="clock" color="teal" size="large" />
                              <Timestamp
                                time={posts.timestamp / 1000}
                                format="full"
                              />
                            </List.Content>
                            <List.Content className="votes">
                              <Icon
                                name="thumbs up outline"
                                color="teal"
                                size="large"
                                onClick={() =>
                                  this.thumbsUp(posts.id, "upVote")}
                              />
                              <div className="vote-score">
                                <p className="vote-score-num">{posts.voteScore}</p>
                              </div>
                              <Icon
                                name="thumbs down outline"
                                color="red"
                                size="large"
                                onClick={() =>
                                  this.thumbsDown(posts.id, "downVote")}
                              />
                            </List.Content>
                            <List.Content className="comments" key={posts.id}>
                              <Icon
                                name="comment outline"
                                color="teal"
                                size="large"
                              />
                              {posts.comments && posts.comments.length}
                            </List.Content>
                            <Link to={`/editPost/${posts.id}`}>
                                  <Button>
                                      Edit Post
                                  </Button> 
                            </Link>
  
                          </List.Content>
                        </List.Item>
                        <div className="post-btn-wrapper">
   
                        </div>
                      </Segment>
                  }
            </div>
            {/* <Comments/> */}
          </div>
        </div>
      );
    }
  }
  
  //Give the HomePage access to the redux store state for receivePosts and sort.
  //Pass reducers directly into mapStateToProps (instead of the state), so we need less code.
  const mapStateToProps = ({ posts, sort }) => ({
      posts,
      sort
    });
    
    //Imported all actions from action folder. Pass actions into connect,
    //so they can be accessed via this.props and a mapDispatchToProps function isn't needed.
  export default connect(mapStateToProps, actions)(PostDetail);
  