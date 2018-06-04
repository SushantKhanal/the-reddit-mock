import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import Timestamp from "react-timestamp";
import {
    List,
    Header,
    Button,
    Segment,
    Icon,
    Responsive
  } from "semantic-ui-react";

class HomePage extends Component {
  componentDidMount() {
      this.props.fetchAllPosts();
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

          <div className="post-container">
            {/*Check if posts exist, then filter over the posts, sort the posts,
          and map over the posts, to display them on the HomePage*/
            posts &&
              posts.length > 0 &&
              posts
                .filter(post => !post.deleted)
                .map(post => (
                  <List key={post.id} divided relaxed>
                    <Segment color="teal" raised>
                      <List.Item>
                        <List.Content>
                          <List.Header>{post.title}</List.Header>
                          <List.Content className="author">
                            <Icon name="user" color="teal" size="large" />
                            {post.author}
                          </List.Content>
                          <List.Content className="time">
                            <Icon name="clock" color="teal" size="large" />
                            <Timestamp
                              time={post.timestamp / 1000}
                              format="full"
                            />
                          </List.Content>
                          <List.Content className="votes">
                            <Icon
                              name="thumbs up outline"
                              color="teal"
                              size="large"
                              onClick={() =>
                                this.thumbsUp(post.id, "upVote")}
                            />
                            <div className="vote-score">
                              <p className="vote-score-num">{post.voteScore}</p>
                            </div>
                            <Icon
                              name="thumbs down outline"
                              color="red"
                              size="large"
                              onClick={() =>
                                this.thumbsDown(post.id, "downVote")}
                            />
                          </List.Content>
                          <List.Content className="comments" key={post.id}>
                            <Icon
                              name="comment outline"
                              color="teal"
                              size="large"
                            />
                            {post.comments && post.comments.length}
                          </List.Content>
                          <Link to={`/editPost/${post.id}`}>
                                <Button>
                                    Edit Post
                                </Button> 
                          </Link>

                        </List.Content>
                      </List.Item>
                      <div className="post-btn-wrapper">
 
                      </div>
                    </Segment>
                  </List>
                ))}
            <div className="btn-add">
              <Link to="/addpost">
                <Button compact color="teal" size="large">
                  <Icon name="plus circle" />
                  Add Post
                </Button>
              </Link>
            </div>
          </div>
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
export default connect(mapStateToProps, actions)(HomePage);
