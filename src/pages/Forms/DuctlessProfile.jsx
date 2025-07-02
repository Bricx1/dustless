import React, { useState } from 'react';
import { Thermometer, Zap, Wind, Shield, Star, ChevronDown, ChevronUp } from 'lucide-react';

const DuctlessProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSpec, setExpandedSpec] = useState(null);

  const specifications = [
    {
      category: 'Cooling Capacity',
      value: '12,000 BTU/h',
      detail: 'Efficient cooling for rooms up to 550 sq ft'
    },
    {
      category: 'Heating Capacity',
      value: '13,600 BTU/h',
      detail: 'Reliable heating down to -13°F outdoor temperature'
    },
    {
      category: 'SEER Rating',
      value: '22',
      detail: 'High efficiency rating for energy savings'
    },
    {
      category: 'HSPF Rating',
      value: '10',
      detail: 'Excellent heating seasonal performance'
    },
    {
      category: 'Noise Level',
      value: '19 dB',
      detail: 'Whisper-quiet operation'
    },
    {
      category: 'Refrigerant',
      value: 'R-410A',
      detail: 'Environmentally friendly refrigerant'
    }
  ];

  const features = [
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Multi-Zone Control',
      description: 'Independent temperature control for each room'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Energy Efficient',
      description: 'Up to 40% more efficient than traditional systems'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Advanced Filtration',
      description: 'Multi-stage filtration removes allergens and particles'
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: 'Smart Controls',
      description: 'WiFi enabled with smartphone app control'
    }
  ];

  const toggleSpec = (index) => {
    setExpandedSpec(expandedSpec === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Premium Dustless Mini-Split</h1>
              <p className="text-blue-100 text-lg">Model: DS-12K-PRO</p>
              <div className="flex items-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-blue-100">4.8/5 (247 reviews)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">$2,899</div>
                <div className="text-sm text-blue-100">Installation included</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200">
          {['overview', 'specifications', 'features'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 px-6 text-center font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">System Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Experience year-round comfort with our premium dustless mini-split system. 
                    Featuring inverter technology, this system provides precise temperature control 
                    while maintaining exceptional energy efficiency.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">22</div>
                      <div className="text-sm text-green-700">SEER Rating</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">12K</div>
                      <div className="text-sm text-blue-700">BTU Capacity</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">No dustwork required - easy installation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Zone-specific climate control</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Significant energy savings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Whisper-quiet operation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="space-y-3">
                {specifications.map((spec, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleSpec(index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between flex-1">
                        <span className="font-medium text-gray-900">{spec.category}</span>
                        <span className="text-blue-600 font-semibold">{spec.value}</span>
                      </div>
                      {expandedSpec === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 ml-4" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                      )}
                    </button>
                    {expandedSpec === index && (
                      <div className="px-4 pb-4 text-gray-600">
                        {spec.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <div className="text-blue-600">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-800 mb-2">Professional Installation Included</h4>
                <p className="text-yellow-700">
                  Our certified technicians will handle the complete installation process, 
                  including electrical connections, refrigerant lines, and system testing. 
                  5-year warranty on parts and labor included.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="bg-gray-50 px-8 py-6 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Free Quote
          </button>
          <button className="flex-1 bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DuctlessProfile;