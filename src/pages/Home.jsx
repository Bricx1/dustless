import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Star, Thermometer, Wind, Zap, Shield, Clock,
  Users, Award, CheckCircle, MessageCircle, Calendar, HomeIcon, Building,
  Wrench, AlertTriangle, Snowflake, Filter, ArrowRight, PlayCircle, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);
    const handleKey = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'a') setShowAdminLogin(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleCallNow = () => {
    window.location.href = 'tel:+14161234567';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/14161234567?text=Hi, I need premium HVAC services in GTA', '_blank');
  };

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', address: '', message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll contact you within 1 hour to schedule your premium service.");
    setFormData({ name: '', email: '', phone: '', service: '', address: '', message: '' });
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
    {/* Logo and Brand */}
    <div className="flex items-center space-x-3">
      <Wind className="w-10 h-10 text-blue-400 animate-pulse" />
      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          DustlessSolutions
        </h1>
        <p className="text-xs text-gray-400 -mt-1">Premium HVAC Solutions</p>
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

    {/* Call Button */}
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
      <section className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 mb-6">
                  ✨ Premium HVAC Excellence
                </span>
                <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                    Breathe
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Better
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                  Transform your home's air quality with our revolutionary HVAC solutions. 
                  Premium service, cutting-edge technology, guaranteed results.
                </p>
              </div>
              <div className="flex items-center space-x-2 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-bold text-lg">4.9/5</span>
                <span className="text-gray-400">from 500+ reviews</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400">2000+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Emergency Service</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">100%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Quote Form — continues in next message */}


            {/* Quote Form */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                  FREE QUOTE IN 60 SECONDS
                </div>
                <div className="text-center mb-8 mt-4">
                  <h3 className="text-2xl font-bold mb-2">Get Premium Service</h3>
                  <p className="text-gray-300">Licensed professionals • Same-day service</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10" required />
                  <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10" required />
                  <input type="text" name="address" placeholder="Your City" value={formData.address} onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10" required />
                  <select name="service" value={formData.service} onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/10">
                    <option value="">Select Service</option>
                    <option value="duct-cleaning">Duct Cleaning</option>
                    <option value="dryer-vent">Dryer Vent Cleaning</option>
                    <option value="hvac-coil">HVAC Coil Cleaning</option>
                    <option value="mini-split">Mini Split Installation</option>
                  </select>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105">
                    Get My Free Quote ✨
                  </button>
                </form>
                <div className="flex items-center justify-center mt-6 space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1"><Shield className="w-4 h-4 text-green-400" /><span>Licensed & Insured</span></div>
                  <div className="flex items-center space-x-1"><Clock className="w-4 h-4 text-blue-400" /><span>Same-Day Service</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Premium HVAC Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Cutting-edge technology meets expert craftsmanship for unparalleled results
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Wind className="w-10 h-10" />,
                title: "Duct Cleaning",
                desc: "Advanced HEPA filtration & antimicrobial solutions.",
                price: "$199"
              },
              {
                icon: <Thermometer className="w-10 h-10" />,
                title: "Dryer Vent Cleaning",
                desc: "Prevents fire hazards and improves energy use.",
                price: "$149"
              },
              {
                icon: <Snowflake className="w-10 h-10" />,
                title: "HVAC Coil Cleaning",
                desc: "Boost HVAC performance and air purity.",
                price: "$179"
              },
              {
                icon: <Filter className="w-10 h-10" />,
                title: "Mini Split Installation",
                desc: "Efficient ductless systems with zone control.",
                price: "Custom Quote"
              }
            ].map((svc, idx) => (
              <div key={idx} className="bg-white/10 p-6 rounded-2xl border border-white/20 text-left hover:border-white/40 transition-all">
                <div className="flex items-center gap-4 mb-4">{svc.icon}<h3 className="text-xl font-bold">{svc.title}</h3></div>
                <p className="text-gray-300 mb-4">{svc.desc}</p>
                <div className="text-green-400 font-bold text-lg">{svc.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real experiences from satisfied customers across the GTA
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Mitchell", location: "Toronto", text: "Transformed our home's air quality!", service: "Duct Cleaning", avatar: "SM" },
              { name: "Michael Rodriguez", location: "Mississauga", text: "Emergency dryer vent service saved us!", service: "Dryer Vent", avatar: "MR" },
              { name: "Jennifer Chen", location: "Markham", text: "Mini-split install was flawless!", service: "Mini Split", avatar: "JC" }
            ].map((t, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">{t.avatar}</div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.location}</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-300">"{t.text}"</blockquote>
                <p className="text-blue-400 text-sm mt-3">{t.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section id="service-area-map" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Proudly Serving the GTA
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Toronto, Mississauga, Markham, Brampton, and beyond.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/20 shadow-xl">
           <iframe
  title="GTA Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115891.257664145!2d-79.51814138189657!3d43.718155559343634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9c359e4cb%3A0x9480174a9f8022c2!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1720549000000"
  width="100%"
  height="480"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  className="w-full h-[480px]"
></iframe>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 p-12 rounded-3xl border border-white/20">
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book now and enjoy expert HVAC services trusted by 2,000+ GTA residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleCallNow} className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg">Call Now</button>
              <button onClick={handleWhatsApp} className="bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-lg">Message on WhatsApp</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Wind className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DustlessSolutions</h3>
                <p className="text-xs text-gray-400">Premium HVAC Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Serving GTA with top-tier duct, vent, and HVAC services. Certified, trusted, and local.
            </p>
            <span onClick={() => setShowAdminLogin(true)} className="text-xs text-transparent hover:text-white cursor-pointer">.</span>
          </div>
          <div><h4 className="text-white font-semibold mb-4">Services</h4><ul className="text-gray-400 space-y-2"><li>Duct Cleaning</li><li>Dryer Vent</li><li>Coil Cleaning</li><li>Mini Split</li></ul></div>
          <div><h4 className="text-white font-semibold mb-4">Areas</h4><ul className="text-gray-400 space-y-2"><li>Toronto</li><li>Markham</li><li>Mississauga</li><li>Brampton</li></ul></div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2"><Phone className="w-4 h-4" /><span>(416) 123-4567</span></div>
              <div className="flex items-center space-x-2"><Mail className="w-4 h-4" /><span>info@dustlesssolutions.com</span></div>
              <div className="flex items-center space-x-2"><Shield className="w-4 h-4" /><span>Licensed & Insured</span></div>
            </div>
          </div>
        </div>
      </footer>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-sm w-full relative">
            <h3 className="text-xl font-bold mb-4 text-black">Admin Login</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const pwd = e.target.password.value;
              if (pwd === 'admin123') {
                window.location.href = '/dashboard';
              } else {
                alert("Incorrect Password");
              }
            }}>
              <input
                type="password"
                name="password"
                placeholder="Enter Admin Password"
                className="w-full px-4 py-3 border border-gray-300 rounded mb-4"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700"
              >
                Login
              </button>
            </form>
            <button onClick={() => setShowAdminLogin(false)} className="absolute top-2 right-3 text-black text-2xl">×</button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Home;
