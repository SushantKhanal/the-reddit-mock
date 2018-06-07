import { combineReducers } from "redux";

import { 
    RECEIVE_POSTS,
    CHANGE_SORT,
    UPDATE_VOTE_COUNT, 
    ADD_POST
} from '../actions'
import { CommentActions } from "semantic-ui-react";

function posts(state={}, action) {
    switch(action.type) {
        case RECEIVE_POSTS:
            return {...state, posts: action.posts};

        case UPDATE_VOTE_COUNT:
            const updatedPosts = state.posts.map(post=>{
                if(post.id == action.postId){
                    if(action.option == "upVote"){
                        post.voteScore = post.voteScore + 1;
                    } else {
                        post.voteScore = post.voteScore - 1;
                    }       
                } 
                return post
            })
            return {...state, posts: updatedPosts};

        case ADD_POST:
            return {...state, posts: state.posts.push[CommentActions.post]}    

        default:
            return {state};
        

    }
}


function sort(state = { sort: "popular" }, action) {
    switch (action.type) {
      case CHANGE_SORT:
        const newValue = action.value;
        return {
          ...state,
          sort: newValue
        };
      default:
        return state;
    }
  }

export default combineReducers({
    posts,
    sort
  });