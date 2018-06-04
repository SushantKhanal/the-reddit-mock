import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
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
  render() {
      const { posts } = this.props.posts;
    return (
        <div>
            <h1>This is HomePage!!!</h1>
            <Link to='/addPost'>
                <Button compact color="teal" size="large">
                    <Icon name="plus circle" />
                    Add Post
                </Button>
            </Link>    
                {
                    posts &&
                        posts.length > 0 &&
                            posts
                                .filter(post => !post.deleted)
                                .map(post=>
                                    (<List key={post.id} divided relaxed>
                                        <Segment color="teal" raised>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Header>
                                                        {post.title}
                                                    </List.Header>
                                                </List.Content>
                                            </List.Item>            
                                        </Segment>
                                    </List>))
                }
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
