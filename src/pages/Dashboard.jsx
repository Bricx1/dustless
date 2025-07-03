import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

import Appointments from './Appointments';
import Services from './Services';
import Leads from './DuctlessLeadForm';
import Analytics from './Analytics';

const DashboardHome = () => (
  <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="text-3xl font-bold text-blue-600">12</div>
        <div className="text-sm text-gray-600">New leads</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="text-3xl font-bold text-green-600">350</div>
        <div className="text-sm text-gray-600">Total scheduled</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="text-3xl font-bold text-orange-600">8</div>
        <div className="text-sm text-gray-600">Overdue appointments</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="text-3xl font-bold text-purple-600">15</div>
        <div className="text-sm text-gray-600">Scheduled for tomorrow</div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Recent appointments</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Date</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Bryan Davis</td>
                <td className="py-3">April 18, 2025</td>
                <td className="py-3">10:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Leads</h3>
        <div className="space-y-3">
          {['Bryan Davis', 'Sarah Johnson', 'Mike Wilson'].map((name, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">{name}</div>
                <div className="text-sm text-gray-600">555-1234</div>
              </div>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">New</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Contact</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Maintenance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />;
      case 'appointments':
        return <Appointments />;
      case 'services':
        return <Services />;
      case 'leads':
        return <Leads />;
      case 'analytics':
        return <Analytics />;
      default:
        return <div>Invalid tab</div>;
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'Dashboard';
      case 'appointments':
        return 'Appointments';
      case 'services':
        return 'Services';
      case 'leads':
        return 'Leads';
      case 'analytics':
        return 'Analytics';
      default:
        return '';
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={getPageTitle()} />
        <main className="flex-1 overflow-y-auto p-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
