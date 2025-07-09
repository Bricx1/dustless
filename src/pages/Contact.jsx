import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Send, Star, Wind, 
  Shield, CheckCircle, AlertCircle, Calendar, User, Home, 
  Wrench, Zap, ArrowRight, Facebook, Instagram, Twitter
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', phone: '', service: '', address: '', urgency: '', message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1500);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+14161234567';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/14161234567?text=Hi, I need premium HVAC services in GTA', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@dustlesssolutions.com';
  };

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
          {[...Array(50)].map((_, i) => (
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
            <Wind className="w-10 h-10 text-blue-400 animate-pulse" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                DustlessSolutions
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Premium HVAC Solutions</p>
            </div>
          </div>
          <button
            onClick={handleCallNow}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-semibold shadow-lg flex items-center space-x-2 text-white text-sm transition"
          >
            <Phone className="w-4 h-4" />
            <span>(416) 123-4567</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 mb-6">
              ✨ Ready to Help 24/7
            </span>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Get in
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with Toronto's premier HVAC specialists. Fast response, expert solutions, 
              and unmatched customer service across the GTA.
            </p>
            
            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={handleCallNow}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleWhatsApp}
                className="group bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-full text-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
                <span>WhatsApp</span>
              </button>
              <button 
                onClick={handleEmailClick}
                className="group bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-full text-lg font-bold hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
              >
                <Mail className="w-6 h-6 group-hover:animate-pulse" />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                  GET PRIORITY SERVICE
                </div>
                
                <div className="text-center mb-8 mt-4">
                  <h3 className="text-3xl font-bold mb-2">Send Us a Message</h3>
                  <p className="text-gray-300">We'll respond within 1 hour, guaranteed</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-300">Message sent successfully! We'll contact you within 1 hour.</span>
                  </div>
                )}

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10" 
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Your Phone" 
                        value={formData.phone} 
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10" 
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10" 
                    />
                  </div>

                  <div className="relative">
                    <Home className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      name="address" 
                      placeholder="Your Address/City" 
                      value={formData.address} 
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <Wrench className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <select 
                        name="service" 
                        value={formData.service} 
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/10"
                      >
                        <option value="">Select Service</option>
                        <option value="duct-cleaning">Duct Cleaning</option>
                        <option value="dryer-vent">Dryer Vent Cleaning</option>
                        <option value="hvac-coil">HVAC Coil Cleaning</option>
                        <option value="mini-split">Mini Split Installation</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                    <div className="relative">
                      <Zap className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <select 
                        name="urgency" 
                        value={formData.urgency} 
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/10"
                      >
                        <option value="">Urgency Level</option>
                        <option value="emergency">Emergency (Today)</option>
                        <option value="urgent">Urgent (This Week)</option>
                        <option value="normal">Normal (Next Week)</option>
                        <option value="quote">Quote Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea 
                      name="message" 
                      placeholder="Describe your HVAC needs..." 
                      value={formData.message} 
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 resize-none"
                    />
                  </div>

                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message ✨</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>1-Hour Response</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-8">
                
                {/* Business Hours */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                    <Clock className="w-8 h-8 text-blue-400" />
                    <span>Business Hours</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-white font-semibold">7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-white font-semibold">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="border-t border-white/20 pt-3 mt-4">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                        <span className="text-red-300 font-semibold">Emergency Service Available 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Contact Methods</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer" onClick={handleCallNow}>
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Call Now</h4>
                        <p className="text-blue-300 font-mono">(416) 123-4567</p>
                        <p className="text-gray-400 text-sm">Fastest response for emergencies</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer" onClick={handleWhatsApp}>
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">WhatsApp</h4>
                        <p className="text-green-300">(416) 123-4567</p>
                        <p className="text-gray-400 text-sm">Quick messaging & photos</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer" onClick={handleEmailClick}>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-blue-300">info@dustlesssolutions.com</p>
                        <p className="text-gray-400 text-sm">Detailed inquiries & quotes</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Service Area</h4>
                        <p className="text-purple-300">Greater Toronto Area</p>
                        <p className="text-gray-400 text-sm">Toronto, Mississauga, Markham & more</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Twitter className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </div>
                      <div className="text-2xl font-bold text-white">4.9/5</div>
                      <div className="text-sm text-gray-400">Customer Rating</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Shield className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-sm text-gray-400">Licensed & Insured</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Service Area
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Proudly serving the Greater Toronto Area with premium HVAC solutions
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/20 shadow-xl">
            <iframe
              title="GTA Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115891.257664145!2d-79.51814138189657!3d43.718155559343634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9c359e4cb%3A0x9480174a9f8022c2!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1720549000000"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Wind className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                DustlessSolutions
              </h3>
              <p className="text-sm text-gray-400">Premium HVAC Solutions</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Your trusted partner for all HVAC needs in the GTA. Licensed, insured, and committed to excellence.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2024 DustlessSolutions</span>
            <span>•</span>
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>24/7 Emergency Service</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Contact;