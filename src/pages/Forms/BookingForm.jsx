import React, { useState, useEffect } from 'react';

const serviceData = {
  'duct-cleaning': {
    name: 'Duct Cleaning Services',
    details:
      'Professional duct cleaning service covering Toronto, Markham, Scarborough & GTA. Removes dust & allergens, improves indoor air quality, and boosts HVAC efficiency.',
  },
  'dryer-vent': {
    name: 'Dryer Vent Cleaning',
    details:
      'Essential dryer vent cleaning service in Durham, Ajax, Pickering, Oshawa. Reduces fire risk, improves dryer efficiency, and ensures insurance compliance.',
  },
  'hvac-coil': {
    name: 'HVAC Coil Cleaning',
    details:
      'HVAC coil cleaning service in Mississauga, Brampton, Etobicoke. Provides energy savings, extends equipment life, and improves cooling/heating performance.',
  },
  'combo-special': {
    name: 'Combo Special - Duct + Dryer Vent',
    details:
      'Special combo package for $299 covering all GTA regions. Includes both duct cleaning and dryer vent cleaning - a complete home cleaning solution.',
  },
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    service: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    preferredDate: '',
    homeType: '',
    additionalInfo: '',
  });

  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelect = (id) => {
    setFormData({ ...formData, service: id });
    setSelectedService(id);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you within 24 hours.');
    console.log('Form data:', formData);
  };

  const today = new Date().toISOString().split('T')[0];

  const serviceOptions = [
    {
      id: 'duct-cleaning',
      icon: '🌬️',
      title: 'Duct Cleaning Services',
      description: 'Professional Duct Cleaning - Breathe Cleaner Air',
      locations: ['Toronto', 'Markham', 'Scarborough', 'GTA'],
      features: ['Remove dust & allergens', 'Improve indoor air quality', 'Boost HVAC efficiency'],
    },
    {
      id: 'dryer-vent',
      icon: '⚡',
      title: 'Dryer Vent Cleaning',
      description: 'Prevent Fires – Clean Dryer Vents Today',
      locations: ['Durham', 'Ajax', 'Pickering', 'Oshawa'],
      features: ['Reduce fire risk', 'Improve dryer efficiency', 'Insurance compliance'],
    },
    {
      id: 'hvac-coil',
      icon: '🔧',
      title: 'HVAC Coil Cleaning',
      description: 'Optimize HVAC System – Clean Coils Now',
      locations: ['Mississauga', 'Brampton', 'Etobicoke'],
      features: ['Energy savings', 'Extend equipment life', 'Better cooling/heating'],
    },
    {
      id: 'combo-special',
      icon: '⏰',
      title: 'Combo Specials',
      description: 'Duct + Dryer Vent Cleaning – Only $299!',
      locations: ['All GTA Regions'],
      features: ['Value deal', 'Full home cleaning', 'Limited-time offer'],
      price: '$299',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl my-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Book Your HVAC Service</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          {serviceOptions.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service.id)}
              className={`border rounded-lg p-4 cursor-pointer transition duration-200 ${
                formData.service === service.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </div>
              <p className="text-gray-500 mb-2">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-2 text-sm text-gray-600">
                {service.locations.map((loc, idx) => (
                  <span key={idx} className="bg-gray-200 rounded px-2 py-1">
                    {loc}
                  </span>
                ))}
              </div>
              <ul className="text-sm text-green-600 list-disc pl-5">
                {service.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              {service.price && (
                <div className="text-center text-red-500 font-semibold mt-3">
                  Special Price: {service.price}
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
            <h3 className="text-lg font-bold text-green-700 mb-1">
              Service Selected: {serviceData[selectedService].name}
            </h3>
            <p className="text-sm text-green-800">{serviceData[selectedService].details}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <input
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="border p-3 rounded-lg w-full"
          />
          <input
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="border p-3 rounded-lg w-full"
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Service Address *"
          value={formData.address}
          onChange={handleInputChange}
          required
          className="border p-3 rounded-lg w-full mt-4"
        />

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            className="border p-3 rounded-lg w-full"
          >
            <option value="">Select City</option>
            {[
              'Toronto',
              'Markham',
              'Scarborough',
              'Durham',
              'Ajax',
              'Pickering',
              'Oshawa',
              'Mississauga',
              'Brampton',
              'Etobicoke',
              'Other GTA'
            ].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleInputChange}
            min={today}
            className="border p-3 rounded-lg w-full"
          />
        </div>

        <select
          name="homeType"
          value={formData.homeType}
          onChange={handleInputChange}
          className="border p-3 rounded-lg w-full mt-4"
        >
          <option value="">Select Home Type</option>
          <option value="Single Family">Single Family Home</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Condo">Condo/Apartment</option>
          <option value="Commercial">Commercial Property</option>
        </select>

        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          placeholder="Additional Info or Requests..."
          rows={4}
          className="border p-3 rounded-lg w-full mt-4"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 mt-6 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all"
        >
          Book My Service Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
