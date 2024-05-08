import React from 'react';
import '../styles/Loader.scss';

const Loader: React.FC = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
