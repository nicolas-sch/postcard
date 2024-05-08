import postReducer from '../redux/postReducer';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  CREATE_POST_FAILURE,
  EDIT_POST_REQUEST,
  EDIT_POST_FAILURE,
} from '../redux/postActions';


describe('postReducer', () => {
    it('should return the initial state', () => {
        expect(postReducer(undefined, {})).toEqual({
            loading: false,
            posts: [],
            error: '',
        });
    });

    it('should handle FETCH_POSTS_REQUEST', () => {
        const action = { type: FETCH_POSTS_REQUEST };
        expect(postReducer(undefined, action)).toEqual({
            loading: true,
            posts: [],
            error: '',
        });
    });

    it('should handle FETCH_POSTS_SUCCESS', () => {
        const posts = [{ id: 1, title: 'Post 1' }];
        const action = { type: FETCH_POSTS_SUCCESS, payload: posts };
        expect(postReducer(undefined, action)).toEqual({
            loading: false,
            posts: posts,
            error: '',
        });
    });

    it('should handle FETCH_POSTS_FAILURE', () => {
        const error = 'Network Error';
        const action = { type: FETCH_POSTS_FAILURE, payload: error };
        expect(postReducer(undefined, action)).toEqual({
            loading: false,
            posts: [],
            error: error,
        });
    });

    it('should handle CREATE_POST_FAILURE', () => {
        const error = 'Server Error';
        const action = { type: CREATE_POST_FAILURE, payload: error };
        expect(postReducer(undefined, action)).toEqual({
            loading: false,
            posts: [],
            error: error,
        });
    });

    it('should handle EDIT_POST_REQUEST', () => {
        const action = { type: EDIT_POST_REQUEST };
        expect(postReducer(undefined, action)).toEqual({
            loading: true,
            posts: [],
            error: '',
        });
    });

    it('should handle EDIT_POST_FAILURE', () => {
        const error = 'Server Error';
        const action = { type: EDIT_POST_FAILURE, payload: error };
        expect(postReducer(undefined, action)).toEqual({
            loading: false,
            posts: [],
            error: error,
        });
    });
});
