import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './Forms/LoginForm';

const Home = ({ user, onLogin }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!user) return <LoginForm onLogin={onLogin} />;

  return (
    <>
      {/* Navbar */}
      <header className="bg-[#2d4a80] text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-white font-semibold">Ductless</span><span className="text-white font-extrabold">Solutions GTA</span>
          </div>
          <nav className="space-x-6 hidden md:flex text-sm">
            <a href="#home" className="hover:text-orange-400">Home</a>
            <a href="#services" className="hover:text-orange-400">Services</a>
            <a href="#about" className="hover:text-orange-400">About</a>
            <a href="#contact" className="hover:text-orange-400">Contact</a>
            <Link to="/login" className="hover:text-orange-400">Login</Link>
            <Link to="/register" className="hover:text-orange-400">Register</Link>
          </nav>
          <Link
            to="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full text-sm ml-4"
          >
            Free Estimate
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Ductless HVAC Solutions in GTA</h1>
        <p className="text-lg md:text-xl mb-8">Energy-efficient mini split systems for year-round comfort. Installation, repair, and maintenance in Toronto, Mississauga & more.</p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-semibold">Get Free Estimate</a>
          <a href="tel:416-555-0123" className="border border-white py-2 px-6 rounded-md font-semibold hover:bg-white hover:text-purple-600">Call (416) 555-0123</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Our Ductless HVAC Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {[
            "Mini Split Installation",
            "Repair & Maintenance",
            "Heat Pump Systems",
            "Energy Audits",
            "Commercial Solutions",
            "24/7 Emergency Service",
          ].map((title, index) => (
            <div key={index} className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, suscipit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Ductless Solutions GTA?</h2>
            <p className="text-gray-700 mb-4">With years of experience delivering top-tier ductless HVAC solutions across the GTA, we provide reliable, energy-efficient comfort systems tailored to your needs. Trust in our professionalism, transparent pricing, and same-day service availability.</p>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Certified and trained technicians</li>
              <li>Affordable pricing & financing</li>
              <li>Residential and commercial expertise</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-64 w-full"></div>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-10 text-center mt-16">
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">2000+</h3>
            <p className="text-gray-600">Local Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">24/7</h3>
            <p className="text-gray-600">Emergency Help</p>
          </div>
        </div>
      </section>

      {/* Estimate Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <form className="bg-white text-black p-8 rounded-xl shadow-lg space-y-4">
            <h3 className="text-2xl font-bold text-center text-indigo-700">Request Free Quote</h3>
            <input className="w-full p-3 border rounded-lg" placeholder="Full Name" required />
            <input className="w-full p-3 border rounded-lg" placeholder="Email Address" type="email" required />
            <input className="w-full p-3 border rounded-lg" placeholder="Phone Number" required />
            <select className="w-full p-3 border rounded-lg" required>
              <option value="">Select Service</option>
              <option value="installation">Mini Split Installation</option>
              <option value="repair">Repair & Maintenance</option>
            </select>
            <textarea className="w-full p-3 border rounded-lg" rows={4} placeholder="Tell us more..." />
            <button type="submit" className="w-full bg-orange-500 text-white p-3 rounded-lg font-semibold hover:bg-orange-600">Submit</button>
          </form>

          <div className="bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
            <h3 className="text-2xl font-bold text-indigo-700">Contact Information</h3>
            <p><strong>📍 Address:</strong> 123 Main St, Toronto, ON</p>
            <p><strong>📞 Phone:</strong> (416) 555-0123</p>
            <p><strong>📧 Email:</strong> support@ductlesssolution.com</p>
            <p><strong>🕒 Hours:</strong> Mon–Sun, 8AM–9PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div>
            <h4 className="text-white font-semibold mb-2">Ductless Solutions GTA</h4>
            <p>Reliable HVAC systems. Serving the Greater Toronto Area with expert service and care.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1">
              <li>Installation</li>
              <li>Repair & Maintenance</li>
              <li>24/7 Support</li>
              <li>Commercial HVAC</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Contact</li>
              <li>Book Now</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p>support@ductlesssolution.com</p>
            <p>+1 (416) 555-0123</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          © 2025 Ductless Solutions GTA. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
