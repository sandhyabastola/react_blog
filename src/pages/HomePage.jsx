
import React from 'react';
import { Link } from 'react-router-dom';
import { mockPosts } from '../data/mockData';

export default function HomePage() {
  return (
    <div className="container homepage">
      <h1>Welcome to our Blog</h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        Discover insights, tutorials, and thoughts on web development, design, and technology.
      </p>
      <Link to="/create" className="create-post-link" style={{ marginBottom: '20px' }}>
        ➕ Create New Post
      </Link>
      <ul className="blog-list">
        {mockPosts.map((post) => (
          <li key={post.id} className="blog-card">
            <Link to={`/post/${post.id}`} className="blog-title">
              <strong>{post.title}</strong>
            </Link>
            <p className="blog-excerpt">
              {post.content.slice(0, 80)}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
