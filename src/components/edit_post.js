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

const options = [
    { key: 1, text: "React", value: "react" },
    { key: 2, text: "Redux", value: "redux" },
    { key: 3, text: "Udacity", value: "udacity" },
    { key: 4, text: "Javascript", value: "javascript" }
]

class EditPost extends Component {
    state = {}
    componentDidMount(){
        const { postId } = this.props.match.params
        this.props.receivePostById(postId)
        .then(posts => {
            console.log(posts);
            this.setState({
                postId: posts.posts.id,
                postCategory: posts.posts.category,
                postTitle: posts.posts.title,
                postBody: posts.posts.body,
                postAuthor: posts.posts.author
            })
        })
    }

    handleInputChange= (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    setCategory = (e, data) => {
        this.setState({ postCategory: data.value });
    };

    submitChanges = () => {
        const { postId, postCategory, postTitle, postBody, postAuthor } = this.state
        const post = {
            id: postId,
            category: postCategory,
            title: postTitle,
            body: postBody,
            author: postAuthor
        }
        this.props.saveEditedPost(post, postId);
        this.props.history.push("/"); ///this takes us back to the Home Page
    }
    
    render() {
        return (
            <div className="edit-post-page">
                <h1>
                    EDIT POST
                </h1>    
                <br/>
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
                </Form>        

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
export default connect(mapStateToProps, actions)(EditPost);