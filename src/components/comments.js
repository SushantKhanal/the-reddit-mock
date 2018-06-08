import React, { Component } from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import "../App.css";

class Comments extends Component {
    state = {}
    componentDidMount(){
            this.setState({
                postComments: this.props.comments,
            })
            console.log(this.props.comments);
    }
    render() {
      return (
            <h1>these are comments..</h1>
      );
    }
}
  
export default Comments;