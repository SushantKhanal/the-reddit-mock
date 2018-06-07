import * as api from "../utils/api";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const CHANGE_SORT = "CHANGE_SORT";
export const UPDATE_VOTE_COUNT = "UPDATE_VOTE_COUNT";
export const ADD_POST = "ADD_POST"

//Thunk is used to handle asynchronous actions in redux

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

//Fetch all the posts using thunk action
export const fetchAllPosts = () => dispatch => 
    api
    .getAllPosts()
    .then(posts =>
        Promise.all(
            posts.map(post=>
                api
                    .getComments(post.id)
                    .then(comments=>post.comments = comments)
                    .then(()=> post)
                )
            )
    )
    .then(posts=> dispatch(receivePosts(posts)));

//action to update vote count 
export const updateVoteCount = (postId, option) => ({
    type: UPDATE_VOTE_COUNT,
    postId: postId,
    option: option
})    

//action to add new post
export const addPost = (post) => ({
    type: ADD_POST,
    post: post
})

//thunk action to update vote count 
export const votePost = (postId, option) => dispatch =>
    api
    .votePost(postId, option)
    .then(()=> dispatch(updateVoteCount(postId, option)));    

//thunk action to recieve post
export const receivePostById = (postId) => dispatch =>
    api
    .getSinglePost(postId)
    .then((post)=> dispatch(receivePosts(post)));

//thunk action to save edited post
export const saveEditedPost = (post, postId) => dispatch =>
    api
    .editPost(post, postId)
    .then((post)=> dispatch(receivePosts(post)));

//thunk action to save the new post
export const addNewPost = (post) => dispatch =>
    api
    .addPost(post)
    .then(
        (post) => 
        dispatch(addPost(post))
    );

export const changeSort = (value) => ({
    type: CHANGE_SORT,
    value: value
})