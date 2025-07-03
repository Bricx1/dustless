import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  Thermometer, 
  Power, 
  Wifi, 
  Shield, 
  Users, 
  Activity, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Edit3,
  Save,
  X,
  Plus,
  Trash2
} from 'lucide-react';

const DuctlessProfile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingProfile, setEditingProfile] = useState(false);
  const [adminProfile, setAdminProfile] = useState({
    name: 'John Anderson',
    email: 'j.anderson@hvactech.com',
    role: 'System Administrator',
    department: 'HVAC Operations',
    phone: '+1 (555) 123-4567',
    lastLogin: '2025-07-03 09:30 AM'
  });

  const [systems, setSystems] = useState([
    {
      id: 1,
      name: 'Office Building A - Floor 2',
      status: 'online',
      temperature: 72,
      setPoint: 72,
      mode: 'cooling',
      lastMaintenance: '2025-06-15',
      efficiency: 94
    },
    {
      id: 2,
      name: 'Conference Room Complex',
      status: 'maintenance',
      temperature: 68,
      setPoint: 70,
      mode: 'heating',
      lastMaintenance: '2025-07-01',
      efficiency: 88
    },
    {
      id: 3,
      name: 'Warehouse Section C',
      status: 'offline',
      temperature: 75,
      setPoint: 70,
      mode: 'cooling',
      lastMaintenance: '2025-05-20',
      efficiency: 0
    }
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'Sarah Mitchell', role: 'Technician', status: 'active', lastActive: '2025-07-03' },
    { id: 2, name: 'Mike Rodriguez', role: 'Supervisor', status: 'active', lastActive: '2025-07-02' },
    { id: 3, name: 'Emma Chen', role: 'Operator', status: 'inactive', lastActive: '2025-06-28' }
  ]);

  const handleProfileSave = () => {
    setEditingProfile(false);
    // Save profile logic would go here
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'online': return 'text-green-600 bg-green-100';
      case 'offline': return 'text-red-600 bg-red-100';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'online': return <CheckCircle className="w-4 h-4" />;
      case 'offline': return <XCircle className="w-4 h-4" />;
      case 'maintenance': return <AlertTriangle className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Systems</p>
              <p className="text-3xl font-bold text-blue-600">{systems.length}</p>
            </div>
            <Thermometer className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Online Systems</p>
              <p className="text-3xl font-bold text-green-600">
                {systems.filter(s => s.status === 'online').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Efficiency</p>
              <p className="text-3xl font-bold text-purple-600">
                {Math.round(systems.reduce((acc, s) => acc + s.efficiency, 0) / systems.length)}%
              </p>
            </div>
            <Activity className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">System Status Overview</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {systems.map(system => (
              <div key={system.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${getStatusColor(system.status)}`}>
                    {getStatusIcon(system.status)}
                    <span className="capitalize">{system.status}</span>
                  </div>
                  <div>
                    <p className="font-medium">{system.name}</p>
                    <p className="text-sm text-gray-600">{system.temperature}°F | {system.mode}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Efficiency</p>
                  <p className="font-semibold">{system.efficiency}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b flex justify-between items-center">
        <h3 className="text-lg font-semibold">Admin Profile</h3>
        {!editingProfile ? (
          <button
            onClick={() => setEditingProfile(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleProfileSave}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button
              onClick={() => setEditingProfile(false)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{adminProfile.name}</h2>
            <p className="text-gray-600">{adminProfile.role}</p>
            <p className="text-sm text-gray-500">Last login: {adminProfile.lastLogin}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              {editingProfile ? (
                <input
                  type="text"
                  value={adminProfile.name}
                  onChange={(e) => setAdminProfile({...adminProfile, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{adminProfile.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              {editingProfile ? (
                <input
                  type="email"
                  value={adminProfile.email}
                  onChange={(e) => setAdminProfile({...adminProfile, email: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{adminProfile.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              {editingProfile ? (
                <input
                  type="tel"
                  value={adminProfile.phone}
                  onChange={(e) => setAdminProfile({...adminProfile, phone: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{adminProfile.phone}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <p className="text-gray-900">{adminProfile.role}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              {editingProfile ? (
                <input
                  type="text"
                  value={adminProfile.department}
                  onChange={(e) => setAdminProfile({...adminProfile, department: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{adminProfile.department}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Account Status</label>
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>Active</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b flex justify-between items-center">
        <h3 className="text-lg font-semibold">User Management</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {users.map(user => (
            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Last Active</p>
                  <p className="text-sm">{user.lastActive}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  user.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {user.status}
                </span>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">System Settings</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Automatic Maintenance Alerts</p>
              <p className="text-sm text-gray-600">Send notifications when maintenance is due</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Energy Efficiency Monitoring</p>
              <p className="text-sm text-gray-600">Track and optimize energy usage</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Remote Access</p>
              <p className="text-sm text-gray-600">Allow remote system control</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Security Settings</h3>
        </div>
        <div className="p-6 space-y-4">
          <button className="w-full text-left p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Change Password</p>
                <p className="text-sm text-gray-600">Update your admin password</p>
              </div>
              <Shield className="w-5 h-5 text-gray-400" />
            </div>
          </button>
          
          <button className="w-full text-left p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Add an extra layer of security</p>
              </div>
              <Shield className="w-5 h-5 text-gray-400" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Thermometer className="w-8 h-8 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">DuctlessAdmin</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Connected</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow p-4">
              <div className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: Activity },
                  { id: 'profile', label: 'Profile', icon: User },
                  { id: 'users', label: 'Users', icon: Users },
                  { id: 'settings', label: 'Settings', icon: Settings }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          <div className="flex-1">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'profile' && renderProfile()}
            {activeTab === 'users' && renderUsers()}
            {activeTab === 'settings' && renderSettings()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuctlessProfile;