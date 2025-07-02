import React, { useState } from 'react';

const Settings = () => {
  const [name, setName] = useState('Sharjeel Khan');
  const [email, setEmail] = useState('sharjeel@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    if (!email.includes('@')) return alert('Invalid email address.');
    if (newPassword && newPassword !== confirmPassword) {
      return alert('New passwords do not match.');
    }

    // 🚀 Replace this with your real API integration (e.g., fetch/axios POST to ductlesss backend)
    alert('✅ Settings updated successfully!');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>

      {/* Profile Info */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Profile Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Change Password</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter current password"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Re-enter new password"
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Preferences</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700">Enable Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="w-5 h-5 text-blue-600"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Email Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="w-5 h-5 text-blue-600"
          />
        </div>
      </div>

      {/* Save */}
      <div className="text-right">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
