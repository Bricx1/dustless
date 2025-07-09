import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Star, Thermometer, Wind, Zap, Shield, Clock,
  Users, Award, CheckCircle, MessageCircle, Calendar, Home, Building,
  Wrench, AlertTriangle, Snowflake, Filter, ArrowRight, PlayCircle, Sparkles,
  Quote, ThumbsUp, Heart, TrendingUp, Camera, Video, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCallNow = () => {
    window.location.href = 'tel:+14161234567';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/14161234567?text=Hi, I need premium HVAC services in GTA', '_blank');
  };

  const featuredReviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "Toronto, ON",
      service: "Duct Cleaning",
      rating: 5,
      date: "2 days ago",
      text: "Absolutely phenomenal service! The team arrived on time, were incredibly professional, and transformed our home's air quality. I can breathe so much better now. The before and after photos they showed me were shocking - I had no idea how dirty our ducts were. Worth every penny!",
      avatar: "SM",
      verified: true,
      photos: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "Mississauga, ON",
      service: "Dryer Vent Cleaning",
      rating: 5,
      date: "1 week ago",
      text: "Emergency call on a Sunday and they came within 2 hours! My dryer was taking forever to dry clothes and they discovered a completely blocked vent. Could have been a fire hazard. These guys literally saved my home. Outstanding service and fair pricing.",
      avatar: "MR",
      verified: true,
      photos: false
    },
    {
      id: 3,
      name: "Jennifer Chen",
      location: "Markham, ON",
      service: "Mini Split Installation",
      rating: 5,
      date: "2 weeks ago",
      text: "The mini-split installation was flawless! Clean work, explained everything thoroughly, and the system works perfectly. My energy bills have already dropped significantly. The team was respectful, wore shoe covers, and left no mess. Highly recommend!",
      avatar: "JC",
      verified: true,
      photos: true
    }
  ];

  const allReviews = [
    ...featuredReviews,
    {
      id: 4,
      name: "David Thompson",
      location: "Brampton, ON",
      service: "HVAC Coil Cleaning",
      rating: 5,
      date: "3 weeks ago",
      text: "My AC wasn't cooling properly and these guys diagnosed the problem immediately. Coil cleaning made a huge difference. Professional, knowledgeable, and honest pricing.",
      avatar: "DT",
      verified: true,
      photos: false
    },
    {
      id: 5,
      name: "Amanda Johnson",
      location: "Richmond Hill, ON",
      service: "Duct Cleaning",
      rating: 5,
      date: "1 month ago",
      text: "Best investment we've made for our home! The difference in air quality is incredible. My allergies have improved dramatically since the duct cleaning.",
      avatar: "AJ",
      verified: true,
      photos: true
    },
    {
      id: 6,
      name: "Robert Kim",
      location: "Vaughan, ON",
      service: "Dryer Vent Cleaning",
      rating: 5,
      date: "1 month ago",
      text: "Quick, efficient, and thorough. The technician explained everything and showed me the lint buildup. Great service and peace of mind.",
      avatar: "RK",
      verified: true,
      photos: false
    },
    {
      id: 7,
      name: "Lisa Wong",
      location: "Scarborough, ON",
      service: "Mini Split Installation",
      rating: 5,
      date: "2 months ago",
      text: "Installation was completed in one day, perfect workmanship, and the system is whisper quiet. Couldn't be happier with the results!",
      avatar: "LW",
      verified: true,
      photos: true
    },
    {
      id: 8,
      name: "James Wilson",
      location: "Etobicoke, ON",
      service: "HVAC Coil Cleaning",
      rating: 5,
      date: "2 months ago",
      text: "Honest, reliable, and skilled. Fixed our heating issue and improved efficiency. Will definitely use them again.",
      avatar: "JW",
      verified: true,
      photos: false
    }
  ];

  const filteredReviews = filterCategory === 'all' ? allReviews : allReviews.filter(review => 
    review.service.toLowerCase().includes(filterCategory.toLowerCase())
  );

  const stats = [
    { number: "4.9", label: "Average Rating", icon: <Star className="w-8 h-8 text-yellow-400" /> },
    { number: "500+", label: "Happy Clients", icon: <Users className="w-8 h-8 text-blue-400" /> },
    { number: "100%", label: "Satisfaction", icon: <ThumbsUp className="w-8 h-8 text-green-400" /> },
    { number: "2000+", label: "Projects Done", icon: <Award className="w-8 h-8 text-purple-400" /> }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % featuredReviews.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
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
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-sm font-medium text-yellow-300 border border-yellow-500/30 mb-8">
                ⭐ Real Reviews from Real Customers
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                  Trusted
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. See what 500+ satisfied customers across the GTA say about our premium HVAC services.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-3">{stat.icon}</div>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real transformations from real customers
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex space-x-2">
                  {featuredReviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentTestimonial ? 'bg-blue-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-center">
                <Quote className="w-16 h-16 text-blue-400 mx-auto mb-6 opacity-60" />
                <blockquote className="text-2xl md:text-3xl font-light italic mb-8 text-gray-200 leading-relaxed">
                  "{featuredReviews[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {featuredReviews[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-xl font-semibold">{featuredReviews[currentTestimonial].name}</h4>
                      {featuredReviews[currentTestimonial].verified && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    <p className="text-gray-400">{featuredReviews[currentTestimonial].location}</p>
                    <p className="text-blue-400 text-sm">{featuredReviews[currentTestimonial].service}</p>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <span>{featuredReviews[currentTestimonial].date}</span>
                  {featuredReviews[currentTestimonial].photos && (
                    <div className="flex items-center space-x-1">
                      <Camera className="w-4 h-4" />
                      <span>Photos included</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Filter and Grid */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              All Customer Reviews
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Browse reviews by service category
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['all', 'Duct Cleaning', 'Dryer Vent', 'HVAC Coil', 'Mini Split'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setFilterCategory(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    filterCategory === filter
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {filter === 'all' ? 'All Reviews' : filter}
                </button>
              ))}
            </div>
          </div>
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-white">{review.name}</h4>
                        {review.verified && (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        )}
                      </div>
                      <p className="text-sm text-gray-400">{review.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-300 mb-4 italic">
                  "{review.text}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm font-medium">{review.service}</span>
                  {review.photos && (
                    <div className="flex items-center space-x-1 text-gray-400 text-xs">
                      <Camera className="w-4 h-4" />
                      <span>Photos</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Customers Trust Us
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-400">Fully licensed professionals with comprehensive insurance coverage</p>
              </div>
              
              <div className="text-center">
                <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-400">Round-the-clock availability for urgent HVAC needs</p>
              </div>
              
              <div className="text-center">
                <Award className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-400">100% satisfaction guarantee on all our services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the same premium service that earned us 500+ five-star reviews across the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Duct Cleaning</li>
              <li>Dryer Vent</li>
              <li>Coil Cleaning</li>
              <li>Mini Split</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Areas</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Toronto</li>
              <li>Markham</li>
              <li>Mississauga</li>
              <li>Brampton</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(416) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@dustlesssolutions.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2024 DustlessSolutions. All rights reserved.</p>
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

export default Reviews;