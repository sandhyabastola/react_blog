import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { useContext } from "react";

function AppContent() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">MyBlog</Link>
          <div className="space-x-6 flex items-center">
            <Link to="/" className="hover:text-blue-600 transition text-blue-600 font-bold">Home</Link>
            <Link to="/create" className="hover:text-blue-600 transition text-blue-600 font-bold">Create</Link>
            {!user && <Link to="/login" className="hover:text-blue-600 transition text-blue-600 font-bold">Login</Link>}
            {user && (
              <button
                onClick={logout}
                className="hover:text-blue-600 transition text-blue-600 font-bold bg-transparent px-3 py-1 rounded border-none cursor-pointer"
                style={{ marginLeft: '8px', background: 'none' }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/create"
            element={<ProtectedRoute><CreatePost /></ProtectedRoute>}
          />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-blue py-6 mt-10">
        <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} <span style={{fontWeight: 'bold', color: '#6366f1'}}>MyBlog</span> —
              Crafted with passion for web creators.<br/>
              <span style={{color: '#f472b6'}}>Share. Learn. Inspire.</span>
            </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}
