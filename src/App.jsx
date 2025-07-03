import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LoginForm from './pages/Forms/LoginForm';
import RegisterForm from './pages/Forms/RegisterForm';
import InstallationForm from './pages/Forms/InstallationForm';
import DuctlessProfile from './pages/Forms/DuctlessProfile';
import Repair from './pages/Forms/Repair';
import Settings from './pages/Forms/Settings';
import Upgrades from './pages/Forms/Upgrades';
import Maintenance from './pages/Forms/Maintenance';
import EmployeeTracker from './pages/Forms/EmployeeTracker';

const App = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("ductlessUser");
    return saved ? JSON.parse(saved) : null;
  });

  const handleLogin = (userData) => {
    localStorage.setItem("ductlessUser", JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("ductlessUser");
    setUser(null);
  };

  // Protected Route Wrapper
  const ProtectedRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home user={user} onLogin={handleLogin} />} />
        <Route path="/home" element={<Home user={user} onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <LoginForm onLogin={handleLogin} />}
        />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/services/installation" element={<ProtectedRoute element={<InstallationForm />} />} />
        <Route path="/services/repair" element={<ProtectedRoute element={<Repair />} />} />
        <Route path="/services/upgrades" element={<ProtectedRoute element={<Upgrades />} />} />
        <Route path="/services/maintenance" element={<ProtectedRoute element={<Maintenance />} />} />
        <Route path="/MyProfile" element={<ProtectedRoute element={<DuctlessProfile />} />} />
        <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
        <Route path="/employeetracker" element={<ProtectedRoute element={<EmployeeTracker />} />} />
      </Routes>
    </Router>
  );
};

export default App;
