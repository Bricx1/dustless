import React, { useState } from 'react';
import { Phone, Mail, MapPin, Thermometer, Clock, Star, CheckCircle, ArrowRight, Zap } from 'lucide-react';

export default function DuctlessLeadForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    serviceInterest: '',
    timeframe: '',
    propertyType: '',
    currentIssue: '',
    bestTimeToCall: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code required';
    if (!formData.serviceInterest) newErrors.serviceInterest = 'Please select a service';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
        console.log('Lead submitted:', formData);
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  const handleNewLead = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      zipCode: '',
      serviceInterest: '',
      timeframe: '',
      propertyType: '',
      currentIssue: '',
      bestTimeToCall: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-lg w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You, {formData.firstName}!</h2>
          <p className="text-gray-600 mb-6 text-lg">
            We've received your information and a Ductless Solution specialist will contact you within 24 hours.
          </p>

          <a
            href="/sample-certificate.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg mb-6 hover:bg-green-700 transition-colors"
          >
            View Sample Certificate
          </a>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">What happens next?</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Free consultation scheduled</li>
              <li>• Custom quote preparation</li>
              <li>• Energy savings analysis</li>
            </ul>
          </div>

          <button
            onClick={handleNewLead}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Submit Another Lead
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-8 pt-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white font-medium">Free Consultation Available</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Stay Cool, Save Money
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto px-4">
            Get a free estimate for ductless mini-split installation and start saving on energy costs today
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4">
              <div className="flex items-center text-white">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-1 sm:mr-2" />
                <span className="font-medium text-sm sm:text-base">5-Star Rated</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4">
              <div className="flex items-center text-white">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 mr-1 sm:mr-2" />
                <span className="font-medium text-sm sm:text-base">Licensed & Insured</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4">
              <div className="flex items-center text-white">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-1 sm:mr-2" />
                <span className="font-medium text-sm sm:text-base">Same Day Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Benefits Section */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Ductless?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Save Up to 40% on Energy Bills</h4>
                    <p className="text-blue-100 text-sm">Ultra-efficient systems that pay for themselves</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Zone Control Comfort</h4>
                    <p className="text-blue-100 text-sm">Heat and cool only the rooms you use</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Quick Installation</h4>
                    <p className="text-blue-100 text-sm">Most installs completed in one day</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Rebates & Financing</h4>
                    <p className="text-blue-100 text-sm">Take advantage of available incentives</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-300 pl-4">
                  <div className="flex text-yellow-300 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm italic">
                    "Cut my electric bill in half! The installation was clean and professional."
                  </p>
                  <p className="text-blue-200 text-xs mt-1">- Sarah M.</p>
                </div>
                
                <div className="border-l-4 border-yellow-300 pl-4">
                  <div className="flex text-yellow-300 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm italic">
                    "Finally comfortable in every room of my house. Highly recommend!"
                  </p>
                  <p className="text-blue-200 text-xs mt-1">- Mike R.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Your Free Estimate</h2>
              <p className="text-gray-600">Takes less than 2 minutes • No obligation</p>
            </div>

            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Smith"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.zipCode ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="12345"
                  />
                  {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Thermometer className="w-4 h-4 inline mr-1" />
                  What service are you interested in? *
                </label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.serviceInterest ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="new-installation">New Mini-Split Installation</option>
                  <option value="replacement">Replace Existing System</option>
                  <option value="repair">Repair Service</option>
                  <option value="maintenance">Maintenance Service</option>
                  <option value="consultation">Free Consultation</option>
                </select>
                {errors.serviceInterest && <p className="text-red-500 text-xs mt-1">{errors.serviceInterest}</p>}
              </div>

              {/* Additional Questions */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="single-family">Single Family</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Best Time to Call
                  </label>
                  <select
                    name="bestTimeToCall"
                    value={formData.bestTimeToCall}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (8AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-5PM)</option>
                    <option value="evening">Evening (5PM-8PM)</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  When do you need this completed?
                </label>
                <select
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select timeframe</option>
                  <option value="asap">As soon as possible</option>
                  <option value="this-week">This week</option>
                  <option value="this-month">This month</option>
                  <option value="next-month">Next month</option>
                  <option value="just-looking">Just looking for quotes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Issue (optional)
                </label>
                <textarea
                  name="currentIssue"
                  value={formData.currentIssue}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe any current heating/cooling issues..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Get My Free Estimate
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">
                By submitting this form, you agree to receive communications from Ductless Solution. 
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}