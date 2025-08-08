import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockPosts } from '../data/mockData';

export default function PostDetail() {
  const { id } = useParams();
  const post = mockPosts.find((p) => p.id === id); // ✅ string comparison

  if (!post) {
    return (
      <div className="container">
        <h2>Post not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
