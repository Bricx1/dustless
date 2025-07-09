import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Star, Thermometer, Wind, Zap, Shield, Clock,
  Users, Award, CheckCircle, MessageCircle, Calendar, Home, Building,
  Wrench, AlertTriangle, Snowflake, Filter, ArrowRight, PlayCircle, Sparkles,
  Gauge, Droplets, Flame, Truck, Settings, Target, Leaf
} from 'lucide-react';
import { Link } from 'react-router-dom';
const DuctlessServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCallNow = () => {
    window.location.href = 'tel:+14161234567';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/14161234567?text=Hi, I need premium HVAC services in GTA', '_blank');
  };

  const services = [
    {
      id: 'duct-cleaning',
      icon: <Wind className="w-12 h-12" />,
      title: 'Professional Duct Cleaning',
      price: 'Starting at $199',
      duration: '2-4 hours',
      description: 'Advanced HEPA filtration system removes 99.97% of contaminants, allergens, and debris from your ductwork.',
      features: [
        'HEPA filtration technology',
        'Antimicrobial treatment',
        'Before/after photos',
        'Air quality testing',
        'Comprehensive inspection',
        '2-year service warranty'
      ],
      process: [
        'Initial system inspection',
        'Seal all vents and registers',
        'High-powered vacuum extraction',
        'Brush and agitate debris',
        'Sanitize with antimicrobial solution',
        'Final air quality verification'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'dryer-vent',
      icon: <Flame className="w-12 h-12" />,
      title: 'Dryer Vent Cleaning',
      price: 'Starting at $149',
      duration: '1-2 hours',
      description: 'Prevent fire hazards and improve dryer efficiency with our comprehensive dryer vent cleaning service.',
      features: [
        'Fire hazard prevention',
        'Lint removal from entire system',
        'Improved drying efficiency',
        'Reduced energy costs',
        'Extended dryer lifespan',
        'Safety inspection included'
      ],
      process: [
        'Disconnect dryer safely',
        'Inspect entire vent system',
        'Remove lint buildup',
        'Clean exterior vent hood',
        'Check for proper airflow',
        'Reconnect and test system'
      ],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      id: 'hvac-coil',
      icon: <Snowflake className="w-12 h-12" />,
      title: 'HVAC Coil Cleaning',
      price: 'Starting at $179',
      duration: '2-3 hours',
      description: 'Restore your HVAC system\'s efficiency with professional evaporator and condenser coil cleaning.',
      features: [
        'Evaporator coil cleaning',
        'Condenser coil cleaning',
        'Improved energy efficiency',
        'Better air quality',
        'Extended system life',
        'Performance optimization'
      ],
      process: [
        'System shutdown and safety prep',
        'Access coil compartments',
        'Apply specialized cleaning solution',
        'Rinse with high-pressure water',
        'Inspect for damage or wear',
        'System startup and testing'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'mini-split',
      icon: <Settings className="w-12 h-12" />,
      title: 'Mini Split Installation',
      price: 'Custom Quote',
      duration: '4-8 hours',
      description: 'Professional ductless mini-split installation for efficient zone-controlled heating and cooling.',
      features: [
        'Energy-efficient operation',
        'Zone control capability',
        'Quiet operation',
        'Professional installation',
        'Warranty coverage',
        'Smart thermostat integration'
      ],
      process: [
        'Site assessment and planning',
        'Mount indoor and outdoor units',
        'Run refrigerant lines',
        'Electrical connections',
        'System testing and commissioning',
        'User training and documentation'
      ],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const additionalServices = [
    { icon: <Filter />, title: 'Air Filter Replacement', desc: 'Premium filter installation', price: '$79' },
    { icon: <Gauge />, title: 'System Diagnostics', desc: 'Comprehensive HVAC analysis', price: '$99' },
    { icon: <Droplets />, title: 'Humidity Control', desc: 'Humidifier/dehumidifier service', price: '$149' },
    { icon: <Zap />, title: 'Energy Audit', desc: 'Efficiency assessment', price: '$199' },
    { icon: <Truck />, title: 'Emergency Service', desc: '24/7 emergency response', price: '$299' },
    { icon: <Leaf />, title: 'Green Solutions', desc: 'Eco-friendly HVAC options', price: 'Quote' }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        ></div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Wind className="w-10 h-10 text-blue-400" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DustlessSolutions</h1>
              <p className="text-xs text-gray-400">Premium HVAC Solutions</p>
            </div>
          </div>
        
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
                 <Link to="/home" className="text-gray-300 hover:text-white transition duration-300">
                Home
              </Link>
              <Link to="/ductless-services" className="text-gray-300 hover:text-white transition duration-300">
                Services
              </Link>
             <Link to="/reviews" className="text-gray-300 hover:text-white transition duration-300">
                Reviews
              </Link>
             <Link to="/Contact" className="text-gray-300 hover:text-white transition duration-300">
                Contact
              </Link>
            </nav>
          <button onClick={handleCallNow} className="bg-green-600 px-6 py-2 rounded-full font-semibold shadow-lg flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>(416) 123-4567</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 mb-6">
              🛠️ Professional HVAC Services
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Premium HVAC
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              From comprehensive duct cleaning to advanced mini-split installations, 
              we deliver cutting-edge HVAC solutions with guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCallNow}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                Get Free Quote
              </button>
              <button 
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-full text-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Core Services
          </h2>
          
          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveService(idx)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeService === idx 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${services[activeService].gradient}`}>
                  {services[activeService].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{services[activeService].title}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-green-400 font-bold text-xl">{services[activeService].price}</span>
                    <span className="text-gray-400">• {services[activeService].duration}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {services[activeService].description}
              </p>

              <div>
                <h4 className="text-xl font-bold mb-4">What's Included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
              <h4 className="text-2xl font-bold mb-6">Our Process</h4>
              <div className="space-y-4">
                {services[activeService].process.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-gray-300">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={handleCallNow}
                className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative z-10 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-green-400 font-semibold">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Service Guarantees
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We stand behind our work with industry-leading warranties and guarantees
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-2xl border border-white/20">
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">100% Satisfaction</h3>
              <p className="text-gray-300">Not happy? We'll make it right or refund your money.</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl border border-white/20">
              <Award className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Licensed & Insured</h3>
              <p className="text-gray-300">Fully licensed professionals with comprehensive insurance.</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl border border-white/20">
              <Clock className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">24/7 Emergency</h3>
              <p className="text-gray-300">Emergency service available around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-12 rounded-3xl border border-white/20">
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Experience the difference professional HVAC service makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleCallNow} className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all">
                Call (416) 123-4567
              </button>
              <button onClick={handleWhatsApp} className="bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-green-700 transition-all">
                WhatsApp Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default DuctlessServices;