import React, { Component } from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import "../App.css";

import {
    List,
    Header,
    Button,
    Segment,
    Icon,
    Responsive,
    Form
  } from "semantic-ui-react";

class Comments extends Component {
    state = {}
    componentWillMount(){
            this.setState({
                postComments: this.props.comments,
            })
            console.log(this.props.comments);
    }
    render() {
        const { comments } = this.props;
      return (
          <div>
            <h1>these are comments..</h1>
            {
                comments &&
                comments.map(comment => 
                    <List key={comment.id} divided relaxed>
                        <Segment color="teal" raised>
                            <List.Item>
                                <List.Content>
                                    {comment.body}
                                </List.Content>
                            </List.Item>
                        </Segment>
                    </List>                
                )
            }
          </div>  
      );
    }
}
  
export default Comments;