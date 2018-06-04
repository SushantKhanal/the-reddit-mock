import { combineReducers } from "redux";

import { 
    RECEIVE_POSTS,
    CHANGE_SORT 
} from '../actions'

function posts(state={}, action) {
    switch(action.type) {
        case RECEIVE_POSTS:
            return {...state, posts: action.posts};

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