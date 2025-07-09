import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '', show: false });

  const validCredentials = {
    admin: { email: 'Skhan@compassionatehhs.org', password: 'admin123' },
    worker: { email: 'drsohail13@gmail.com', password: 'worker123' },
    customer: { email: 'customer@ductless.com', password: 'customer123' },
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setNotification({ ...notification, show: false });
  };

  const showNotification = (message, type) => {
    setNotification({ message, type, show: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    showNotification('Signing in...', 'info');

    setTimeout(() => {
      const roleCredentials = validCredentials[selectedRole];
      if (email === roleCredentials.email && password === roleCredentials.password) {
        const userData = {
          email,
          role: selectedRole,
        };
        localStorage.setItem("ductlessUser", JSON.stringify(userData));
        showNotification(`Welcome ${selectedRole}! Redirecting to dashboard...`, 'success');

        setTimeout(() => {
          // Redirect based on role
          if (selectedRole === "customer") {
            navigate("/customer-services-portal");
          } else {
            navigate("/dashboard");
          }
        }, 1000);
      } else {
        showNotification('Invalid credentials. Please try again.', 'error');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600 p-4">
      <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <span role="img" aria-label="logo" className="text-white text-2xl">❄️</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Dustless Solutions</h1>
          <p className="text-sm text-gray-600">Professional HVAC Services</p>
        </div>

        {notification.show && (
          <div className={`mb-4 px-4 py-2 rounded text-sm ${
            notification.type === 'error' ? 'bg-red-100 text-red-700' :
            notification.type === 'success' ? 'bg-green-100 text-green-700' :
            'bg-blue-100 text-blue-700'
          }`}>
            {notification.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="flex mb-6 bg-gray-100 rounded-lg overflow-hidden">
            {['customer', 'worker', 'admin'].map((role) => (
              <button
                key={role}
                type="button"
                className={`flex-1 py-2 text-sm font-medium transition ${
                  selectedRole === role ? 'bg-white text-indigo-600 shadow' : 'text-gray-600'
                }`}
                onClick={() => handleRoleClick(role)}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              Remember me
            </label>
            <button
              type="button"
              onClick={() =>
                alert(
                  `Demo Credentials:\n\nAdmin: Skhan@compassionatehhs.org / admin123\nWorker: drsohail13@gmail.com / worker123\nCustomer: customer@ductless.com / customer123`
                )
              }
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Customer Support: <a href="tel:+1234567890" className="text-indigo-600 hover:underline">(123) 456-7890</a></p>
          <p>Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Create one</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
