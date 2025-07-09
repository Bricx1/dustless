import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Thermometer, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Trophy,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Award
} from 'lucide-react';

export default function DuctleadForm() {
  const [timeframe, setTimeframe] = useState('this-month');
  const [selectedMetric, setSelectedMetric] = useState('availability');

  // Mock sales team data
  const salesTeam = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      customerAvailability: 98,
      quotesGenerated: 45,
      conversionRate: 67,
      revenue: 125000,
      leads: 67,
      appointments: 52,
      avgResponseTime: 12,
      customerRating: 4.9,
      badge: "Top Performer"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      avatar: "MR",
      customerAvailability: 95,
      quotesGenerated: 38,
      conversionRate: 72,
      revenue: 98000,
      leads: 53,
      appointments: 41,
      avgResponseTime: 15,
      customerRating: 4.8,
      badge: "Rising Star"
    },
    {
      id: 3,
      name: "Jennifer Chen",
      avatar: "JC",
      customerAvailability: 92,
      quotesGenerated: 42,
      conversionRate: 58,
      revenue: 87000,
      leads: 72,
      appointments: 48,
      avgResponseTime: 18,
      customerRating: 4.7,
      badge: "Consistent"
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "DT",
      customerAvailability: 89,
      quotesGenerated: 35,
      conversionRate: 61,
      revenue: 76000,
      leads: 57,
      appointments: 38,
      avgResponseTime: 22,
      customerRating: 4.6,
      badge: "Improving"
    },
    {
      id: 5,
      name: "Lisa Park",
      avatar: "LP",
      customerAvailability: 87,
      quotesGenerated: 29,
      conversionRate: 55,
      revenue: 65000,
      leads: 53,
      appointments: 32,
      avgResponseTime: 25,
      customerRating: 4.5,
      badge: "Steady"
    },
    {
      id: 6,
      name: "Robert Kim",
      avatar: "RK",
      customerAvailability: 84,
      quotesGenerated: 31,
      conversionRate: 52,
      revenue: 58000,
      leads: 60,
      appointments: 35,
      avgResponseTime: 28,
      customerRating: 4.4,
      badge: "Developing"
    }
  ];

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Top Performer': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'Rising Star': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Consistent': return 'bg-gradient-to-r from-green-500 to-teal-500';
      case 'Improving': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Steady': return 'bg-gradient-to-r from-gray-500 to-gray-600';
      default: return 'bg-gradient-to-r from-indigo-500 to-purple-500';
    }
  };

  const getRankIcon = (index) => {
    if (index === 0) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (index === 1) return <Award className="w-6 h-6 text-gray-400" />;
    if (index === 2) return <Award className="w-6 h-6 text-amber-600" />;
    return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold text-gray-600">#{index + 1}</span>;
  };

  const sortedTeam = [...salesTeam].sort((a, b) => {
    if (selectedMetric === 'availability') return b.customerAvailability - a.customerAvailability;
    if (selectedMetric === 'quotes') return b.quotesGenerated - a.quotesGenerated;
    if (selectedMetric === 'conversion') return b.conversionRate - a.conversionRate;
    if (selectedMetric === 'revenue') return b.revenue - a.revenue;
    return 0;
  });

  const teamStats = {
    totalLeads: salesTeam.reduce((sum, member) => sum + member.leads, 0),
    totalQuotes: salesTeam.reduce((sum, member) => sum + member.quotesGenerated, 0),
    totalRevenue: salesTeam.reduce((sum, member) => sum + member.revenue, 0),
    avgAvailability: Math.round(salesTeam.reduce((sum, member) => sum + member.customerAvailability, 0) / salesTeam.length),
    avgConversion: Math.round(salesTeam.reduce((sum, member) => sum + member.conversionRate, 0) / salesTeam.length),
    avgRating: (salesTeam.reduce((sum, member) => sum + member.customerRating, 0) / salesTeam.length).toFixed(1)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Zap className="w-6 h-6 text-yellow-300 mr-3" />
            <span className="text-white font-semibold text-lg">HVAC Sales Performance Dashboard</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Sales Team Leaderboard
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Real-time tracking of customer availability, quotes generated, and team performance
          </p>
        </div>

        {/* Team Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Users className="w-8 h-8 text-blue-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{teamStats.totalLeads}</div>
            <div className="text-blue-200 text-sm">Total Leads</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Target className="w-8 h-8 text-green-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{teamStats.totalQuotes}</div>
            <div className="text-blue-200 text-sm">Quotes Generated</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <DollarSign className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">${(teamStats.totalRevenue / 1000).toFixed(0)}k</div>
            <div className="text-blue-200 text-sm">Total Revenue</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Clock className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{teamStats.avgAvailability}%</div>
            <div className="text-blue-200 text-sm">Avg Availability</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <TrendingUp className="w-8 h-8 text-red-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{teamStats.avgConversion}%</div>
            <div className="text-blue-200 text-sm">Avg Conversion</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{teamStats.avgRating}</div>
            <div className="text-blue-200 text-sm">Avg Rating</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedMetric('availability')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMetric === 'availability' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              Customer Availability
            </button>
            <button
              onClick={() => setSelectedMetric('quotes')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMetric === 'quotes' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              Quotes Generated
            </button>
            <button
              onClick={() => setSelectedMetric('conversion')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMetric === 'conversion' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              Conversion Rate
            </button>
            <button
              onClick={() => setSelectedMetric('revenue')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMetric === 'revenue' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              Revenue
            </button>
          </div>
          
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="last-month">Last Month</option>
            <option value="quarter">This Quarter</option>
          </select>
        </div>

        {/* Leaderboard */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
            Team Performance Rankings
          </h2>
          
          <div className="space-y-4">
            {sortedTeam.map((member, index) => (
              <div
                key={member.id}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${
                  index === 0 ? 'border-yellow-400/50 bg-yellow-400/5' : 
                  index === 1 ? 'border-gray-400/50 bg-gray-400/5' : 
                  index === 2 ? 'border-amber-600/50 bg-amber-600/5' :
                  'border-white/10'
                } transition-all hover:bg-white/10`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getRankIcon(index)}
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getBadgeColor(member.badge)}`}>
                          {member.badge}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{member.customerAvailability}%</div>
                      <div className="text-blue-200 text-sm">Availability</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{member.quotesGenerated}</div>
                      <div className="text-blue-200 text-sm">Quotes</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{member.conversionRate}%</div>
                      <div className="text-blue-200 text-sm">Conversion</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">${(member.revenue / 1000).toFixed(0)}k</div>
                      <div className="text-blue-200 text-sm">Revenue</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="text-white font-bold">{member.customerRating}</span>
                      </div>
                      <div className="text-blue-200 text-sm">Rating</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-blue-200">Leads</div>
                    <div className="text-white font-semibold">{member.leads}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-blue-200">Appointments</div>
                    <div className="text-white font-semibold">{member.appointments}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-blue-200">Avg Response</div>
                    <div className="text-white font-semibold">{member.avgResponseTime}m</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-blue-200">Success Rate</div>
                    <div className="text-white font-semibold">{Math.round((member.appointments / member.leads) * 100)}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30">
            <div className="flex items-center mb-4">
              <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-xl font-bold text-white">Most Available</h3>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                {sortedTeam[0].avatar}
              </div>
              <div>
                <div className="text-white font-semibold">{sortedTeam[0].name}</div>
                <div className="text-yellow-200">{sortedTeam[0].customerAvailability}% availability</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-400/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl font-bold text-white">Quote Leader</h3>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                {[...salesTeam].sort((a, b) => b.quotesGenerated - a.quotesGenerated)[0].avatar}
              </div>
              <div>
                <div className="text-white font-semibold">{[...salesTeam].sort((a, b) => b.quotesGenerated - a.quotesGenerated)[0].name}</div>
                <div className="text-green-200">{[...salesTeam].sort((a, b) => b.quotesGenerated - a.quotesGenerated)[0].quotesGenerated} quotes generated</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-400/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl font-bold text-white">Best Conversion</h3>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                {[...salesTeam].sort((a, b) => b.conversionRate - a.conversionRate)[0].avatar}
              </div>
              <div>
                <div className="text-white font-semibold">{[...salesTeam].sort((a, b) => b.conversionRate - a.conversionRate)[0].name}</div>
                <div className="text-purple-200">{[...salesTeam].sort((a, b) => b.conversionRate - a.conversionRate)[0].conversionRate}% conversion rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}