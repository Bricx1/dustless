import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import ComprehensiveCalendar from './pages/ComprehensiveCalendar';
import CustomerServicesPortal from './customers/CustomerServicesPortal';
import BookingForm from './pages/Forms/BookingForm';
import DuctlessServices from './pages/DuctlessServices';
import Reviews from'./pages/Reviews';
import Contact from './pages/Contact';

const App = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("ductlessUser");
    return saved ? JSON.parse(saved) : null;
  });

  const handleLogin = (userData) => {
    localStorage.setItem("ductlessUser", JSON.stringify(userData));
    setUser(userData);
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
        <Route path="/myprofile" element={<DuctlessProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/services/repair" element={<Repair />} />
        <Route path="/services/upgrades" element={<Upgrades />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/employeetracker" element={<EmployeeTracker />} />
        <Route path="/comprehensivecalendar" element={<ComprehensiveCalendar />} />
        <Route path="/customer-services-portal" element={<CustomerServicesPortal />} />
        <Route path="/book-service" element={<BookingForm />} />
        <Route path="/ductless-services" element={<DuctlessServices />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
