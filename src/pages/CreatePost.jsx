import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Since it's a mock, we'll just alert and redirect
    alert('📝 This is a mock post creation. Data is not saved.');

    // Clear fields and navigate to home
    setTitle('');
    setContent('');
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your content here..."
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
