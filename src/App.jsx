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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} onLogin={handleLogin} />} />
        <Route path="/home" element={<Home user={user} onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services/installation" element={<InstallationForm />} />
        <Route path="/MyProfile" element={<DuctlessProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/services/repair" element={<Repair />} />
        <Route path="/services/upgrades" element={<Upgrades />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/employeetracker" element={<EmployeeTracker />} />
        
      </Routes>
    </Router>
  );
};

export default App;