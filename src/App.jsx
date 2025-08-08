import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { AuthProvider, AuthContext } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="container" style={{ marginBottom: 20 }}>
      <Link to="/">Home</Link> |{' '}
      {user ? (
        <>
          <Link to="/create">Create Post</Link> |{' '}
          <button onClick={logout} style={{ cursor: 'pointer' }}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}

function HomeWrapper(){
  const { user } = useContext(AuthContext);
  return <HomePage canCreate={!!user} />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
