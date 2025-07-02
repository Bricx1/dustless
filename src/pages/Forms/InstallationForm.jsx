import React, { useState } from 'react';

const InstallationForm = () => {
  const [formData, setFormData] = useState({
    // Customer Information
    customerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Installation Details
    propertyType: '',
    buildingAge: '',
    squareFootage: '',
    roomsToHeat: '',
    currentHeatSource: '',
    electricalPanel: '',
    
    // System Specifications
    systemType: '',
    numberOfUnits: '1',
    outdoorUnitLocation: '',
    indoorUnitLocations: [''],
    refrigerantLineLength: '',
    
    // Installation Requirements
    installationDate: '',
    timePreference: '',
    specialRequirements: '',
    accessConcerns: '',
    
    // Permits and Approvals
    permitRequired: false,
    hoaApproval: false,
    utilityDisconnect: false,
    
    // Additional Services
    oldSystemRemoval: false,
    electricalUpgrade: false,
    maintenancePlan: false
  });

  const [errors, setErrors] = useState({});

  const showAlert = (type, title, text) => {
    if (type === 'success') {
      // Simple success notification
      const alertDiv = document.createElement('div');
      alertDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50';
      alertDiv.innerHTML = `
        <div class="flex items-center">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <div>
            <div class="font-bold">${title}</div>
            <div class="text-sm">${text}</div>
          </div>
        </div>
      `;
      document.body.appendChild(alertDiv);
      setTimeout(() => {
        document.body.removeChild(alertDiv);
      }, 5000);
    } else if (type === 'error') {
      // Simple error notification
      const alertDiv = document.createElement('div');
      alertDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg z-50';
      alertDiv.innerHTML = `
        <div class="flex items-center">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <div>
            <div class="font-bold">${title}</div>
            <div class="text-sm">${text}</div>
          </div>
        </div>
      `;
      document.body.appendChild(alertDiv);
      setTimeout(() => {
        document.body.removeChild(alertDiv);
      }, 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleIndoorLocationChange = (index, value) => {
    const newLocations = [...formData.indoorUnitLocations];
    newLocations[index] = value;
    setFormData(prev => ({
      ...prev,
      indoorUnitLocations: newLocations
    }));
  };

  const addIndoorLocation = () => {
    setFormData(prev => ({
      ...prev,
      indoorUnitLocations: [...prev.indoorUnitLocations, '']
    }));
  };

  const removeIndoorLocation = (index) => {
    if (formData.indoorUnitLocations.length > 1) {
      const newLocations = formData.indoorUnitLocations.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        indoorUnitLocations: newLocations
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required field validation
    if (!formData.customerName.trim()) newErrors.customerName = 'Customer name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
    if (!formData.systemType) newErrors.systemType = 'System type is required';
    if (!formData.installationDate) newErrors.installationDate = 'Installation date is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter phone in format (123) 456-7890';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        showAlert('success', 'Success!', 'Installation form submitted successfully. We will contact you soon to schedule the installation.');
        // Reset form
        setFormData({
          customerName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          propertyType: '',
          buildingAge: '',
          squareFootage: '',
          roomsToHeat: '',
          currentHeatSource: '',
          electricalPanel: '',
          systemType: '',
          numberOfUnits: '1',
          outdoorUnitLocation: '',
          indoorUnitLocations: [''],
          refrigerantLineLength: '',
          installationDate: '',
          timePreference: '',
          specialRequirements: '',
          accessConcerns: '',
          permitRequired: false,
          hoaApproval: false,
          utilityDisconnect: false,
          oldSystemRemoval: false,
          electricalUpgrade: false,
          maintenancePlan: false
        });
      }, 1000);
    } else {
      showAlert('error', 'Validation Error', 'Please fill in all required fields correctly.');
    }
  };

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formattedPhone
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">Ductless System Installation Form</h1>
            <p className="text-blue-100 mt-2">Complete this form to schedule your ductless HVAC installation</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Customer Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.customerName ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter full name"
                  />
                  {errors.customerName && <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="(123) 456-7890"
                    maxLength="14"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Installation Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter street address"
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter city"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="12345"
                      maxLength="5"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Property Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                Property Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.propertyType ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select Property Type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="condo">Condominium</option>
                    <option value="apartment">Apartment</option>
                    <option value="commercial">Commercial Building</option>
                  </select>
                  {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Building Age</label>
                  <select
                    name="buildingAge"
                    value={formData.buildingAge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select Age Range</option>
                    <option value="0-5">0-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="11-20">11-20 years</option>
                    <option value="21-30">21-30 years</option>
                    <option value="30+">30+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Square Footage</label>
                  <input
                    type="number"
                    name="squareFootage"
                    value={formData.squareFootage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="e.g., 1500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rooms to Heat/Cool</label>
                  <input
                    type="number"
                    name="roomsToHeat"
                    value={formData.roomsToHeat}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Number of rooms"
                    min="1"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Heat Source</label>
                  <select
                    name="currentHeatSource"
                    value={formData.currentHeatSource}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select Current System</option>
                    <option value="central-air">Central Air/Heat</option>
                    <option value="baseboard">Electric Baseboard</option>
                    <option value="radiator">Hot Water Radiator</option>
                    <option value="none">No Current System</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Electrical Panel Type</label>
                  <select
                    name="electricalPanel"
                    value={formData.electricalPanel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select Panel Type</option>
                    <option value="modern">Modern Circuit Breaker</option>
                    <option value="old-breaker">Older Circuit Breaker</option>
                    <option value="fuse">Fuse Box</option>
                    <option value="unknown">Not Sure</option>
                  </select>
                </div>
              </div>
            </section>

            {/* System Specifications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                System Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    System Type *
                  </label>
                  <select
                    name="systemType"
                    value={formData.systemType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.systemType ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select System Type</option>
                    <option value="single-zone">Single Zone Mini-Split</option>
                    <option value="multi-zone">Multi-Zone Mini-Split</option>
                    <option value="ducted">Ducted Mini-Split</option>
                    <option value="vrf">VRF System</option>
                  </select>
                  {errors.systemType && <p className="text-red-500 text-sm mt-1">{errors.systemType}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Indoor Units</label>
                  <select
                    name="numberOfUnits"
                    value={formData.numberOfUnits}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="1">1 Unit</option>
                    <option value="2">2 Units</option>
                    <option value="3">3 Units</option>
                    <option value="4">4 Units</option>
                    <option value="5">5 Units</option>
                    <option value="6+">6+ Units</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Outdoor Unit Location</label>
                  <select
                    name="outdoorUnitLocation"
                    value={formData.outdoorUnitLocation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select Location</option>
                    <option value="ground-side">Ground Level - Side of House</option>
                    <option value="ground-back">Ground Level - Back of House</option>
                    <option value="roof">Roof Mount</option>
                    <option value="balcony">Balcony/Deck</option>
                    <option value="other">Other Location</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Line Length</label>
                  <select
                    name="refrigerantLineLength"
                    value={formData.refrigerantLineLength}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select Length</option>
                    <option value="15ft">Up to 15 feet</option>
                    <option value="25ft">16-25 feet</option>
                    <option value="35ft">26-35 feet</option>
                    <option value="50ft">36-50 feet</option>
                    <option value="50ft+">Over 50 feet</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Indoor Unit Locations</label>
                  {formData.indoorUnitLocations.map((location, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => handleIndoorLocationChange(index, e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder={`Indoor unit ${index + 1} location (e.g., Living Room, Master Bedroom)`}
                      />
                      {formData.indoorUnitLocations.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeIndoorLocation(index)}
                          className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addIndoorLocation}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Add Another Location
                  </button>
                </div>
              </div>
            </section>

            {/* Installation Details */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                Installation Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Installation Date *
                  </label>
                  <input
                    type="date"
                    name="installationDate"
                    value={formData.installationDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.installationDate ? 'border-red-500' : 'border-gray-300'}`}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.installationDate && <p className="text-red-500 text-sm mt-1">{errors.installationDate}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Preference</label>
                  <select
                    name="timePreference"
                    value={formData.timePreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (8 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Any special installation requirements or considerations..."
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Access Concerns</label>
                  <textarea
                    name="accessConcerns"
                    value={formData.accessConcerns}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Any access concerns, parking restrictions, or site-specific challenges..."
                  />
                </div>
              </div>
            </section>

            {/* Permits and Additional Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                Permits & Additional Services
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3">Permits & Approvals</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="permitRequired"
                        checked={formData.permitRequired}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Building permit required</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="hoaApproval"
                        checked={formData.hoaApproval}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">HOA approval needed</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="utilityDisconnect"
                        checked={formData.utilityDisconnect}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Utility disconnect required</span>
                    </label>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3">Additional Services</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="oldSystemRemoval"
                        checked={formData.oldSystemRemoval}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Remove old heating/cooling system</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="electricalUpgrade"
                        checked={formData.electricalUpgrade}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Electrical panel upgrade needed</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="maintenancePlan"
                        checked={formData.maintenancePlan}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Interested in maintenance plan</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Submit Installation Request
              </button>
            </div>
          </form>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            Questions? Call us at <span className="font-semibold text-blue-600">(555) 123-4567</span> or email{' '}
            <span className="font-semibold text-blue-600">info@ductlesssolutions.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstallationForm;