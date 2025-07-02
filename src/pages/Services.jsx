import React from 'react';
import { Link } from 'react-router-dom';
import {
  Settings,
  ChevronRight,
  Wrench,
  Calendar
} from 'lucide-react';

const Services = () => (
  <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Installation */}
      <Link to="/services/installation" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow block">
        <div className="mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Settings className="text-blue-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Installation</h3>
          <p className="text-gray-600 text-sm">Expert installation of ductless mini-split systems</p>
        </div>
        <div className="flex items-center text-blue-600 text-sm font-medium">
          Learn more <ChevronRight size={16} className="ml-1" />
        </div>
      </Link>

      {/* Upgrades */}
      <Link to="/services/upgrades" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow block">
        <div className="mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Wrench className="text-green-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Upgrades</h3>
          <p className="text-gray-600 text-sm">Upgrade your existing ductless HVAC systems</p>
        </div>
        <div className="flex items-center text-blue-600 text-sm font-medium">
          Learn more <ChevronRight size={16} className="ml-1" />
        </div>
      </Link>

      {/* Repair */}
      <Link to="/services/repair" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow block">
        <div className="mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <Settings className="text-orange-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Repair</h3>
          <p className="text-gray-600 text-sm">Professional repair services for ductless units</p>
        </div>
        <div className="flex items-center text-blue-600 text-sm font-medium">
          Learn more <ChevronRight size={16} className="ml-1" />
        </div>
      </Link>

      {/* Maintenance */}
      <Link to="/services/maintenance" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow md:col-span-1 lg:col-span-3 block">
        <div className="mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Calendar className="text-purple-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Maintenance</h3>
          <p className="text-gray-600 text-sm">Regular maintenance to ensure peak performance</p>
        </div>
        <div className="flex items-center text-blue-600 text-sm font-medium">
          Learn more <ChevronRight size={16} className="ml-1" />
        </div>
      </Link>

    </div>
  </div>
);

export default Services;
