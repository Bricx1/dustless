import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, Thermometer, Wind, Zap, Shield, Clock, Users, Award, CheckCircle } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Mini Split Installation",
      description: "Energy-efficient ductless systems for precise temperature control in any space.",
      features: ["Professional installation", "Energy efficient", "Quiet operation"]
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Repair & Maintenance",
      description: "Expert diagnostics and repair services to keep your HVAC system running smoothly.",
      features: ["24/7 emergency service", "Licensed technicians", "Quality guaranteed"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Heat Pump Systems",
      description: "Eco-friendly heating and cooling solutions for year-round comfort.",
      features: ["Energy savings", "Eco-friendly", "All-season comfort"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Energy Audits",
      description: "Comprehensive energy assessments to optimize your system's performance.",
      features: ["Detailed analysis", "Cost savings", "Efficiency boost"]
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Commercial Solutions",
      description: "Large-scale HVAC systems for businesses and commercial properties.",
      features: ["Custom design", "Scalable solutions", "Maintenance plans"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency repairs when you need them most.",
      features: ["Rapid response", "Weekend service", "Emergency repairs"]
    }
  ];

  const stats = [
    { number: "2000+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Emergency Service", icon: <Clock className="w-6 h-6" /> }
  ];

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
      {/* Navigation */}
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
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Dustless</span> HVAC Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Energy-efficient ductless systems for your home, office, and commercial spaces in Toronto, Mississauga, and GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl">
                Schedule Service
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4 text-blue-400 group-hover:text-purple-400 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Dustless HVAC Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive heating, ventilation, and air conditioning solutions designed for maximum comfort and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/10 cursor-pointer ${
                  activeService === index ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Dustless Solutions GTA?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                We are your trusted partner for all HVAC needs in the Greater Toronto Area. Our commitment to quality, 
                reliability, and customer satisfaction sets us apart from the competition.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Licensed and Insured Technicians</h4>
                    <p className="text-gray-400">All our technicians are fully licensed and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Quality Workmanship Guarantee</h4>
                    <p className="text-gray-400">We stand behind our work with comprehensive warranties and guarantees.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">24/7 Emergency Services</h4>
                    <p className="text-gray-400">Round-the-clock emergency repairs when you need them most.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">15+</div>
                  <div className="text-xl text-gray-300 mb-4">Years of Experience</div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">2000+</div>
                  <div className="text-lg text-gray-300">Satisfied Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to improve your comfort? Contact us today for a free consultation.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Request Free Quote</h3>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Service</option>
                    <option value="installation">Installation</option>
                    <option value="repair">Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-gray-300">(416) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-gray-300">info@dustlesssolutions.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">Service Areas</div>
                      <div className="text-gray-300">Toronto, Mississauga, GTA</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">24/7 Emergency Service</h4>
                <p className="text-gray-300 mb-4">HVAC emergencies don't wait for business hours. We're here when you need us most.</p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Emergency Call: (416) 999-HVAC
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Thermometer className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold text-white">DustlessSolutions GTA</span>
              </div>
              <p className="text-gray-400">
                Your trusted HVAC partner in the Greater Toronto Area, providing expert dustless solutions for over 15 years.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Installation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Repair</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Toronto</li>
                <li>Mississauga</li>
                <li>Brampton</li>
                <li>Greater Toronto Area</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div>(416) 123-4567</div>
                <div>info@dustlesssolutions.com</div>
                <div>Licensed & Insured</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DustlessSolutions GTA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;