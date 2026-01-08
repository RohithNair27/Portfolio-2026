import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "docker-model-runner",
      title: "Docker Model Runner",
      date: "01 Jan 2026",
      category: "AI/Machine learning",
    },
    {
      id: 2,
      slug: "eventLoop",
      title: "Event Loop",
      date: "23 Jun 2025",
      category: "JavaScript",
    },
    {
      id: 3,
      slug: "secureCoding",
      title: "Input is Evil: Mastering the Attack Surface",
      date: "01 Oct 2025",
      category: "Secure Software Engineering",
    },
  ];

  const sortedPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Layout>
      <h1>Blog Posts</h1>
      <ul className="post-list">
        {sortedPosts.map((post) => (
          <li key={post.id}>
            <span className="post-date">{post.date}</span>
            <Link to={`/blog/${post.slug}`} className="post-link">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;