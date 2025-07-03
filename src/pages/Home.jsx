import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, Thermometer, Wind, Zap, Shield, Clock, Users, Award, CheckCircle } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [/* ... same services array ... */];
  const stats = [/* ... same stats array ... */];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Updated Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Thermometer className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">DustlessSolutions GTA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-blue-400 transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-white hover:text-blue-400 transition-colors font-medium">Login</a>
              <a href="/register" className="text-white hover:text-blue-400 transition-colors font-medium">Register</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Keep the rest of your sections exactly the same */}
      {/* Hero, Stats, Services, Why Choose Us, Contact, Footer */}
      {/* No changes below needed for this request */}
      
    </div>
  );
};

export default Home;
