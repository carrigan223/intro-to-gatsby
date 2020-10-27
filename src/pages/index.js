import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello California</p>
      <Link to="/about/">&rarr; About</Link>

      <h2>Read My Blog</h2>
      {posts.map(post => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  );
};
