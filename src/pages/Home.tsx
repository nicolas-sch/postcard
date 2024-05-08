import React from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import { fetchPosts } from '../redux/postActions';
import '../styles/Home.scss';
import PostList from '../components/PostList'

interface Props {
  fetchPosts: () => void;
}

const HomePage: React.FC<Props> = ({ fetchPosts }) => {
  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className='home-wrapper'>
      <header className="header">
        <h1 className="title">Posts Page</h1>
      </header>
      <PostCard />
      <PostList />
    </div>
  );
};

export default connect(null, { fetchPosts })(HomePage);
