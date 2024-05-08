import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, editPost } from '../redux/postActions';
import '../styles/PostCard.scss';
import Button from './Button';
import Loader from './Loader';
import Pagination from './Pagination';

interface Props {
  posts: any[];
  loading: boolean;
  error: string;
  fetchPosts: () => void;
  editPost: (postId: number, title: string, body: string) => void;
}

const PostList: React.FC<Props> = ({ posts, loading, error, fetchPosts, editPost }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editedPostTitle, setEditedPostTitle] = useState('');
  const [editedPostBody, setEditedPostBody] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleEditClick = (postId: number, postTitle: string, postBody: string) => {
    setEditingPostId(postId);
    setEditedPostTitle(postTitle);
    setEditedPostBody(postBody);
  };

  const handleSaveClick = () => {
    if (editingPostId !== null) {
      editPost(editingPostId, editedPostTitle, editedPostBody);
      setEditingPostId(null);
    }
  };

  return (
    <div className='post-wrapper'>
        <h2>Latest Posts</h2>
        <div className='post-container'>
        {loading && <Loader />}
        {error && <div>Error: {error}</div>}
        {currentPosts.map(post => (
            <div key={post.id} className="post-card" role="article">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {editingPostId === post.id ? (
                <div className="edit-post-form">
                <input 
                    aria-label="Edited post title"
                    value={editedPostTitle} 
                    onChange={e => setEditedPostTitle(e.target.value)}
                />
                <textarea 
                    aria-label="Edited post body"
                    value={editedPostBody} 
                    onChange={e => setEditedPostBody(e.target.value)}
                />
                <Button onClick={handleSaveClick} text="Save" />
                </div>
            ) : (
                <Button onClick={() => handleEditClick(post.id, post.title, post.body)} text="Edit" />
            )}
            </div>
        ))}
        <Pagination currentPage={currentPage} totalPages={Math.ceil(posts.length / postsPerPage)} paginate={paginate} />
        </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error,
});

export default connect(mapStateToProps, { fetchPosts, editPost })(PostList);
