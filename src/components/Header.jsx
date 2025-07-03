import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, User, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notifRef = useRef();
  const profileRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!notifRef.current?.contains(e.target)) setShowNotif(false);
      if (!profileRef.current?.contains(e.target)) setShowProfile(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("tikangToken");
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 capitalize">{title}</h2>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Workers Button */}
          <button
            onClick={() => navigate('/employeetracker')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            👷 Workers
          </button>

          {/* Calendar Icon */}
          <button
            onClick={() => navigate('/comprehensivecalendar')}
            className="p-2 rounded-full hover:bg-gray-100"
            title="Calendar"
          >
            <CalendarDays className="text-gray-500 hover:text-gray-700" size={20} />
          </button>

          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setShowNotif(!showNotif)}
              className="relative p-2 rounded-full hover:bg-gray-100"
            >
              <Bell className="text-gray-500 hover:text-gray-700" size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            </button>
            {showNotif && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-3 text-sm font-semibold border-b">Notifications</div>
                <ul className="divide-y text-sm text-gray-700">
                  <li className="p-3 hover:bg-gray-50">📅 Appointment at 3:00 PM</li>
                  <li className="p-3 hover:bg-gray-50">📥 New lead: John Doe</li>
                  <li className="p-3 hover:bg-gray-50">⚙️ System maintenance scheduled</li>
                </ul>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <User className="text-gray-500 hover:text-gray-700" size={20} />
            </button>
            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="text-sm text-gray-700">
                  <li
                    onClick={() => navigate('/MyProfile')}
                    className="p-3 hover:bg-gray-50 cursor-pointer"
                  >
                    👤 My Profile
                  </li>
                  <li
                    onClick={() => navigate('/settings')}
                    className="p-3 hover:bg-gray-50 cursor-pointer"
                  >
                    ⚙️ Settings
                  </li>
                  <li
                    onClick={handleLogout}
                    className="p-3 hover:bg-gray-50 cursor-pointer text-red-500"
                  >
                    🚪 Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
