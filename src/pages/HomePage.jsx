// src/pages/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { mockPosts } from '../data/mockData';

export default function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to our Blog</h1>
      <p className="text-xl text-gray-600 max-w-2xl">
          Discover insights, tutorials, and thoughts on web development, design, and technology.
        </p>
      <Link to="/create" style={{ display: 'inline-block', marginBottom: '20px' }}>
        ➕ Create New Post
      </Link>

      <ul>
        {mockPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <strong>{post.title}</strong>
            </Link>
            <p style={{ marginTop: '5px', color: '#555' }}>
              {post.content.slice(0, 80)}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
