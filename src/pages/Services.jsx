import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wind,
  Zap,
  Snowflake,
  SlidersHorizontal,
  ChevronRight,
} from 'lucide-react';

const Services = () => (
  <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Duct Cleaning */}
      <Link to="/services/duct-cleaning" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow block">
        <div className="mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Wind className="text-blue-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-1">Duct Cleaning</h3>
          <p className="text-gray-600 text-sm mb-2">Advanced HEPA filtration & antimicrobial solutions.</p>
          <p className="text-green-600 font-semibold">$199</p>
        </div>
        <div className="flex items-center text-blue-600 text-sm font-medium">
          Learn more <ChevronRight size={16} className="ml-1" />
        </div>
      </Link>

      {/* Dryer Vent Cleaning */}
      <Link to="/services/dryer-vent-cleaning" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow block">
        <div className="mb-4">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="text-yellow-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-1">Dryer Vent Cleaning</h3>
          <p className="text-gray-600 text-sm mb-2">Prevents fire hazards and improves energy use.</p>
          <p className="text-green-600 font-semibold">$149</p>
        </div>
        <div className="flex items-center text-blue-600 text-sm font-medium">
          Learn more <ChevronRight size={16} className="ml-1" />
        </div>
      </Link>

      {/* HVAC Coil Cleaning */}
      <Link to="/services/hvac-coil-cleaning" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow block">
        <div className="mb-4">
          <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
            <Snowflake className="text-cyan-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-1">HVAC Coil Cleaning</h3>
          <p className="text-gray-600 text-sm mb-2">Boost HVAC performance and air purity.</p>
          <p className="text-green-600 font-semibold">$179</p>
        </div>
        <div className="flex items-center text-blue-600 text-sm font-medium">
          Learn more <ChevronRight size={16} className="ml-1" />
        </div>
      </Link>

      {/* Mini Split Installation */}
      <Link to="/services/mini-split-installation" className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow block">
        <div className="mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <SlidersHorizontal className="text-purple-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-1">Mini Split Installation</h3>
          <p className="text-gray-600 text-sm mb-2">Efficient ductless systems with zone control.</p>
          <p className="text-green-600 font-semibold">Custom Quote</p>
        </div>
        <div className="flex items-center text-blue-600 text-sm font-medium">
          Learn more <ChevronRight size={16} className="ml-1" />
        </div>
      </Link>

    </div>
  </div>
);

export default Services;
