import * as api from "../utils/api";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const CHANGE_SORT = "CHANGE_SORT";

//Thunk is used to handle asynchronous actions in redux

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

//Fetch all the posts using thunk action
export const fetchAllPosts = () => dispatch => 
    api.
        getAllPosts()
        .then(posts => dispatch(receivePosts(posts)));

export const changeSort = (value) => ({
    type: CHANGE_SORT,
    value: value
})