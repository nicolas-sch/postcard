import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../redux/postActions';
import '../styles/PostCard.scss';
import Button from './Button';

interface Props {
  posts: any[];
  loading: boolean;
  error: string;
  fetchPosts: () => void;
  createPost: (title: string, body: string) => void;
}

const PostCard: React.FC<Props> = ({ fetchPosts, createPost }) => {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleCreatePost = () => {
    createPost(newPostTitle, newPostBody);
    setNewPostTitle('');
    setNewPostBody('');
  };

  return (
    <div className='post-wrapper'>
      <div className='post-container'>
        <div className="post-card" role="form" aria-label="Create new post">
          <h3>Create New Post</h3>
          <label htmlFor="post-title">Title:</label>
          <input
            type="text"
            id="post-title"
            placeholder="Enter title"
            value={newPostTitle}
            onChange={e => setNewPostTitle(e.target.value)}
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
            aria-label="Post title"
            aria-required="true"
          />
          <label htmlFor="post-body">Body:</label>
          <textarea
            id="post-body"
            placeholder="Enter body"
            value={newPostBody}
            onChange={e => setNewPostBody(e.target.value)}
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
            aria-label="Post body"
            aria-required="true"
          />
          <Button onClick={handleCreatePost} text="Create Post" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error,
});

export default connect(mapStateToProps, { fetchPosts, createPost })(PostCard);
