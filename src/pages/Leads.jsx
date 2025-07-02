import React, { useState } from 'react';

const Leads = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', industry: '', message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      alert('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      alert("Thank you! We'll contact you within 24 hours.");
      setFormData({
        name: '', email: '', phone: '', company: '', industry: '', message: ''
      });
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-center">Get Your Free Consultation</h2>
      <p className="text-center text-gray-600 mb-6">Discover how our dustless solutions can transform your operations</p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          {['name', 'email', 'phone', 'company'].map(field => (
            <div key={field}>
              <label htmlFor={field} className="block font-semibold mb-1 capitalize">
                {field} {['name', 'email', 'phone'].includes(field) && '*'}
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                name={field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                required={['name', 'email', 'phone'].includes(field)}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          ))}

          <div>
            <label htmlFor="industry" className="block font-semibold mb-1">Industry Type</label>
            <select
              name="industry"
              id="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">Select Your Industry</option>
              <option value="construction">Construction</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="automotive">Automotive</option>
              <option value="aerospace">Aerospace</option>
              <option value="woodworking">Woodworking</option>
              <option value="metalworking">Metalworking</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-1">Tell Us About Your Dust Challenges</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your current dust-related issues and what you hope to achieve..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            {submitting ? 'Submitting...' : 'Get Free Consultation Now'}
          </button>

          <p className="text-center text-sm text-gray-500 mt-2">
            🔒 Your information is 100% secure and confidential<br />
            ⚡ Response within 24 hours guaranteed
          </p>
        </div>
      </form>
    </div>
  );
};

export default Leads;
