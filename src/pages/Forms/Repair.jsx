import React, { useState } from 'react';
import { Wrench, AlertTriangle, Clock, CheckCircle, Phone, Mail, MapPin, Calendar, Camera, FileText, Zap, AlertCircle } from 'lucide-react';

export default function Repair() {
  const [formData, setFormData] = useState({
    ticketType: 'repair',
    urgency: 'medium',
    equipmentType: '',
    serialNumber: '',
    purchaseDate: '',
    warrantyStatus: '',
    issueCategory: '',
    issueDescription: '',
    troubleshootingAttempted: '',
    contactName: '',
    companyName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    preferredContactMethod: 'email',
    operatingHours: '',
    accessInstructions: '',
    photos: [],
    documents: [],
    preferredServiceDate: '',
    serviceWindow: '',
    onSiteRequired: false,
    backupEquipment: false,
    safetyRequirements: '',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const equipmentTypes = [
    'Dust Collection System',
    'Air Filtration Unit',
    'Vacuum System',
    'Monitoring Sensors',
    'Control Panel',
    'Exhaust Fan',
    'Ductwork',
    'Filter Assembly',
    'Other'
  ];

  const issueCategories = [
    'Not Powering On',
    'Reduced Suction/Performance',
    'Unusual Noise/Vibration',
    'Filter Issues',
    'Electrical Problems',
    'Mechanical Failure',
    'Sensor Malfunction',
    'Software/Control Issues',
    'Leakage/Sealing Problems',
    'Overheating',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low', color: 'green', desc: 'Non-critical, can wait 5-7 days' },
    { value: 'medium', label: 'Medium', color: 'yellow', desc: 'Important, needs attention within 2-3 days' },
    { value: 'high', label: 'High', color: 'orange', desc: 'Critical, requires attention within 24 hours' },
    { value: 'emergency', label: 'Emergency', color: 'red', desc: 'Immediate attention required' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      [type]: [...prev[type], ...files.map(file => ({ name: file.name, size: file.size }))]
    }));
  };

  const removeFile = (index, type) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Repair Request Submitted!</h2>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">Ticket Number</p>
            <p className="text-lg font-mono font-bold text-blue-600">#DR-{Date.now().toString().slice(-6)}</p>
          </div>
          <p className="text-gray-600 mb-6">
            Your repair request has been received. Our technical team will review your case and contact you within 
            {formData.urgency === 'emergency' ? ' 2 hours' : 
             formData.urgency === 'high' ? ' 4 hours' : 
             formData.urgency === 'medium' ? ' 24 hours' : ' 48 hours'}.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              Emergency: 1-800-DUSTLESS
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              support@dustlesssolution.com
            </div>
          </div>
          <button 
            onClick={() => { setSubmitted(false); setCurrentStep(1); }}
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
          <div className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
              <Wrench className="w-8 h-8 mr-3" />
              Dustless Solution Repair Request
            </h1>
            <p className="text-red-100">Get professional repair service for your dustless equipment</p>
          </div>

          {/* Progress Indicator */}
          <div className="bg-gray-50 px-8 py-4">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Equipment Info</span>
              <span>Issue Details</span>
              <span>Contact Info</span>
              <span>Service Details</span>
            </div>
          </div>

          <div className="p-8">
            {/* Step 1: Equipment Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-500" />
                  Equipment Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Equipment Type *</label>
                    <select
                      name="equipmentType"
                      value={formData.equipmentType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select equipment type</option>
                      {equipmentTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Serial Number *</label>
                    <input
                      type="text"
                      name="serialNumber"
                      value={formData.serialNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter serial number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Date</label>
                    <input
                      type="date"
                      name="purchaseDate"
                      value={formData.purchaseDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Warranty Status</label>
                    <select
                      name="warrantyStatus"
                      value={formData.warrantyStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select warranty status</option>
                      <option value="in-warranty">In Warranty</option>
                      <option value="expired">Warranty Expired</option>
                      <option value="extended">Extended Warranty</option>
                      <option value="unknown">Unknown</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Issue Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                  Issue Details
                </h2>

                {/* Urgency Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {urgencyLevels.map((level) => (
                      <div
                        key={level.value}
                        className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                          formData.urgency === level.value
                            ? `border-${level.color}-500 bg-${level.color}-50`
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, urgency: level.value }))}
                      >
                        <div className="text-center">
                          <div className={`w-3 h-3 rounded-full bg-${level.color}-500 mx-auto mb-1`} />
                          <p className="font-medium text-sm">{level.label}</p>
                          <p className="text-xs text-gray-600 mt-1">{level.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Issue Category *</label>
                    <select
                      name="issueCategory"
                      value={formData.issueCategory}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select issue category</option>
                      {issueCategories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Issue Description *</label>
                  <textarea
                    name="issueDescription"
                    value={formData.issueDescription}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe the issue in detail, including when it started, symptoms, and any error messages..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Troubleshooting Already Attempted</label>
                  <textarea
                    name="troubleshootingAttempted"
                    value={formData.troubleshootingAttempted}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe any troubleshooting steps you've already tried..."
                  />
                </div>

                {/* File Upload */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Photos</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Camera className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleFileUpload(e, 'photos')}
                        className="hidden"
                        id="photo-upload"
                      />
                      <label htmlFor="photo-upload" className="cursor-pointer text-blue-600 hover:text-blue-700">
                        Upload Photos
                      </label>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB each</p>
                    </div>
                    {formData.photos.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {formData.photos.map((file, index) => (
                          <div key={index} className="flex items-center justify-between text-sm bg-gray-50 p-2 rounded">
                            <span>{file.name}</span>
                            <button
                              onClick={() => removeFile(index, 'photos')}
                              className="text-red-500 hover:text-red-700"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Documents</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <FileText className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        multiple
                        onChange={(e) => handleFileUpload(e, 'documents')}
                        className="hidden"
                        id="doc-upload"
                      />
                      <label htmlFor="doc-upload" className="cursor-pointer text-blue-600 hover:text-blue-700">
                        Upload Documents
                      </label>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOC, TXT up to 10MB each</p>
                    </div>
                    {formData.documents.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {formData.documents.map((file, index) => (
                          <div key={index} className="flex items-center justify-between text-sm bg-gray-50 p-2 rounded">
                            <span>{file.name}</span>
                            <button
                              onClick={() => removeFile(index, 'documents')}
                              className="text-red-500 hover:text-red-700"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-green-500" />
                  Contact Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Street address"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value="email"
                        checked={formData.preferredContactMethod === 'email'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value="phone"
                        checked={formData.preferredContactMethod === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value="both"
                        checked={formData.preferredContactMethod === 'both'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Both
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Service Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                  Service Details
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Service Date</label>
                    <input
                      type="date"
                      name="preferredServiceDate"
                      value={formData.preferredServiceDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Time Window</label>
                    <select
                      name="serviceWindow"
                      value={formData.serviceWindow}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time window</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Operating Hours</label>
                  <input
                    type="text"
                    name="operatingHours"
                    value={formData.operatingHours}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Monday-Friday 8AM-6PM"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Access Instructions</label>
                  <textarea
                    name="accessInstructions"
                    value={formData.accessInstructions}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Special instructions for accessing the equipment location..."
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="onSiteRequired"
                      checked={formData.onSiteRequired}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    On-site service required (cannot be repaired remotely)
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="backupEquipment"
                      checked={formData.backupEquipment}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Backup equipment needed during repair
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Safety Requirements</label>
                  <textarea
                    name="safetyRequirements"
                    value={formData.safetyRequirements}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any safety protocols, PPE requirements, or hazardous conditions..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any other relevant information..."
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-lg font-medium ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              
              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Next Step
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-2 rounded-lg font-medium hover:from-red-700 hover:to-orange-700 transition-all"
                >
                  Submit Repair Request
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}