import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '4rem', margin: '0', color: 'var(--text-secondary)' }}>404</h1>
        <h2 style={{ margin: '1rem 0' }}>Page Not Found</h2>
        <p style={{ margin: '2rem 0', color: 'var(--text-secondary)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        
      </div>
    </Layout>
  );
};

export default NotFound;