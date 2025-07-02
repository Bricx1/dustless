import React, { useState } from 'react';
import { Check, Star, Shield, Zap, Users, Calendar } from 'lucide-react';

export default function Upgrades() {
  const [formData, setFormData] = useState({
    currentPlan: '',
    upgradePlan: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    employeeCount: '',
    currentUsage: '',
    additionalFeatures: [],
    priority: 'standard',
    implementationDate: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$99/month',
      features: ['Up to 10 users', 'Basic dust monitoring', 'Email support']
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$299/month',
      features: ['Up to 50 users', 'Advanced analytics', 'Real-time alerts', 'Phone support']
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$599/month',
      features: ['Unlimited users', 'Custom integrations', 'AI-powered insights', '24/7 priority support']
    }
  ];

  const additionalFeatures = [
    { id: 'api', name: 'API Access', price: '$50/month' },
    { id: 'mobile', name: 'Mobile App Premium', price: '$30/month' },
    { id: 'training', name: 'Staff Training Program', price: '$200/session' },
    { id: 'consulting', name: 'Implementation Consulting', price: '$150/hour' },
    { id: 'reports', name: 'Advanced Reporting Suite', price: '$75/month' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureToggle = (featureId) => {
    setFormData(prev => ({
      ...prev,
      additionalFeatures: prev.additionalFeatures.includes(featureId)
        ? prev.additionalFeatures.filter(id => id !== featureId)
        : [...prev.additionalFeatures, featureId]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Upgrade Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your upgrade request. Our team will contact you within 24 hours to discuss your requirements and implementation timeline.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
            <h1 className="text-3xl font-bold text-white mb-2">Upgrade Your Dustless Solution</h1>
            <p className="text-blue-100">Enhance your dust management capabilities with our advanced features</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Plan Selection */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Choose Your Upgrade Plan
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-md ${
                      formData.upgradePlan === plan.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, upgradePlan: plan.id }))}
                  >
                    <div className="text-center">
                      <h3 className="font-semibold text-lg text-gray-900">{plan.name}</h3>
                      <p className="text-2xl font-bold text-blue-600 my-2">{plan.price}</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-1 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-500" />
                Company Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Current Usage */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-500" />
                Current Usage Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Plan</label>
                  <select
                    name="currentPlan"
                    value={formData.currentPlan}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select current plan</option>
                    <option value="basic">Basic</option>
                    <option value="professional">Professional</option>
                    <option value="trial">Trial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Employees</label>
                  <select
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-500" />
                Additional Features
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {additionalFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className={`border rounded-lg p-3 cursor-pointer transition-all ${
                      formData.additionalFeatures.includes(feature.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleFeatureToggle(feature.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.name}</h4>
                        <p className="text-sm text-blue-600 font-semibold">{feature.price}</p>
                      </div>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        formData.additionalFeatures.includes(feature.id)
                          ? 'bg-blue-500 border-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {formData.additionalFeatures.includes(feature.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-indigo-500" />
                Implementation Details
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority Level</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="standard">Standard (2-4 weeks)</option>
                    <option value="high">High Priority (1-2 weeks)</option>
                    <option value="urgent">Urgent (Within 1 week)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Implementation Date</label>
                  <input
                    type="date"
                    name="implementationDate"
                    value={formData.implementationDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Comments or Requirements</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about any specific requirements or questions you have..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Submit Upgrade Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

