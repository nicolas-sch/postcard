import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,

} from '../redux/postActions'; // Import your Redux actions file

const mock = new MockAdapter(axios);

describe('Redux Actions', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should create an action to request fetching posts', () => {
    const expectedAction = { type: 'FETCH_POSTS_REQUEST' };
    expect(fetchPostsRequest()).toEqual(expectedAction);
  });

  it('should create an action for successful fetching of posts', () => {
    const posts = [{ id: 1, title: 'Post 1' }];
    const expectedAction = { type: 'FETCH_POSTS_SUCCESS', payload: posts };
    expect(fetchPostsSuccess(posts)).toEqual(expectedAction);
  });

  it('should create an action for failed fetching of posts', () => {
    const error = 'Network Error';
    const expectedAction = { type: 'FETCH_POSTS_FAILURE', payload: error };
    expect(fetchPostsFailure(error)).toEqual(expectedAction);
  });
});
