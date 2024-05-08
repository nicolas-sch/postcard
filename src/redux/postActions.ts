import { Dispatch } from 'redux';
import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';


export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: any) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error: any) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPosts = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPostsRequest());
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};

export const createPostRequest = () => ({
  type: CREATE_POST_REQUEST,
});

export const createPostSuccess = (post: any) => ({
  type: CREATE_POST_SUCCESS,
  payload: post,
});

export const createPostFailure = (error: any) => ({
  type: CREATE_POST_FAILURE,
  payload: error,
});

export const createPost = (title: string, body: string) => {
  return (dispatch: Dispatch) => {
    dispatch(createPostRequest());
    axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
      .then(response => {
        const newPost = response.data;
        dispatch(createPostSuccess(newPost));
      })
      .catch(error => {
        dispatch(createPostFailure(error.message));
      });
  };
};

export const editPostRequest = () => ({
  type: EDIT_POST_REQUEST,
});

export const editPostSuccess = (post: any) => ({
  type: EDIT_POST_SUCCESS,
  payload: post,
});

export const editPostFailure = (error: any) => ({
  type: EDIT_POST_FAILURE,
  payload: error,
});

export const editPost = (postId: number, title: string, body: string) => {
  return (dispatch: Dispatch) => {
    dispatch(editPostRequest());
    axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, { title, body })
      .then(response => {
        const editedPost = response.data;
        dispatch(editPostSuccess(editedPost));
      })
      .catch(error => {
        dispatch(editPostFailure(error.message));
      });
  };
};
