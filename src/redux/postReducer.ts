import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    EDIT_POST_REQUEST,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAILURE,
  } from './postActions';
  
  const initialState = {
    loading: false,
    posts: [],
    error: '',
  };
  
  const postReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_POSTS_SUCCESS:
        return {
          loading: false,
          posts: action.payload,
          error: '',
        };
      case FETCH_POSTS_FAILURE:
        return {
          loading: false,
          posts: [],
          error: action.payload,
        };
      case CREATE_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_POST_SUCCESS:
        return {
          loading: false,
          posts: [action.payload, ...state.posts],
          error: '',
        };
      case CREATE_POST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case EDIT_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case EDIT_POST_SUCCESS:
        const editedPostIndex = state.posts.findIndex((post: any) => post.id === action.payload.id);
        const updatedPosts: any[] = [...state.posts];
        updatedPosts[editedPostIndex] = action.payload;
        return {
          loading: false,
          posts: updatedPosts,
          error: '',
        };
      case EDIT_POST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default postReducer;
  