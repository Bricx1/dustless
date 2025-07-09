import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Calendar,
  Settings,
  HelpCircle,
  Send,
  Star,
  Wrench,
  Thermometer,
} from 'lucide-react';

const CustomerServicesPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'agent',
      message: 'Hello! How can I help you with your ductless system today?',
      time: '10:30 AM',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    service: '',
    date: '',
    time: '',
  });
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    phone: '',
    issue: '',
    priority: 'medium',
    description: '',
  });

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        type: 'user',
        message: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
      setTimeout(() => {
        const response = {
          id: chatMessages.length + 2,
          type: 'agent',
          message:
            'Thanks for your message! Let me help you with that. Can you provide more details about your ductless system model?',
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        };
        setChatMessages((prev) => [...prev, response]);
      }, 1000);
    }
  };

  const handleTicketSubmit = () => {
    if (
      ticketForm.name &&
      ticketForm.email &&
      ticketForm.issue &&
      ticketForm.description
    ) {
      alert(
        "Support ticket submitted successfully! We'll get back to you within 2 hours."
      );
      setTicketForm({
        name: '',
        email: '',
        phone: '',
        issue: '',
        priority: 'medium',
        description: '',
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const faqItems = [
    {
      question: 'How often should I clean my ductless system filters?',
      answer:
        'We recommend cleaning filters every 2-3 weeks for optimal performance. In dusty environments, weekly cleaning may be necessary.',
    },
    {
      question: 'Why is my ductless system not cooling effectively?',
      answer:
        'Common causes include dirty filters, blocked outdoor unit, refrigerant issues, or thermostat problems. Check filters first, then contact us for diagnosis.',
    },
    {
      question: 'What maintenance is required for ductless systems?',
      answer:
        'Regular filter cleaning, annual professional maintenance, keeping outdoor unit clear of debris, and checking for unusual noises or odors.',
    },
    {
      question: 'How do I schedule a service appointment?',
      answer:
        'You can schedule through our online portal, call our service line, or use the chat feature. We offer same-day emergency service.',
    },
  ];

  const serviceRequests = [
    {
      id: 'SR001',
      type: 'Maintenance',
      status: 'Scheduled',
      date: '2024-07-05',
      priority: 'Low',
    },
    {
      id: 'SR002',
      type: 'Repair',
      status: 'In Progress',
      date: '2024-07-04',
      priority: 'High',
    },
    {
      id: 'SR003',
      type: 'Installation',
      status: 'Completed',
      date: '2024-07-01',
      priority: 'Medium',
    },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: 'Active Tickets',
            value: 3,
            color: 'blue',
            icon: <AlertCircle className="h-8 w-8 text-blue-500" />,
          },
          {
            title: 'Resolved This Month',
            value: 12,
            color: 'green',
            icon: <CheckCircle className="h-8 w-8 text-green-500" />,
          },
          {
            title: 'Avg Response Time',
            value: '2.5h',
            color: 'orange',
            icon: <Clock className="h-8 w-8 text-orange-500" />,
          },
          {
            title: 'Satisfaction Score',
            value: '4.8/5',
            color: 'purple',
            icon: <Star className="h-8 w-8 text-purple-500" />,
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-lg shadow-md p-6 border-l-4 border-${card.color}-500`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {card.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              </div>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Service Requests</h3>
          <div className="space-y-3">
            {serviceRequests.map((req) => (
              <div
                key={req.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">
                    {req.id} - {req.type}
                  </p>
                  <p className="text-sm text-gray-600">{req.date}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    req.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : req.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  {req.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setActiveTab('chat')}
              className="flex items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">Start Chat</span>
            </button>
            <button
              onClick={() => setActiveTab('ticket')}
              className="flex items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <AlertCircle className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">New Ticket</span>
            </button>
            <button
              onClick={() => setShowAppointmentModal(true)}
              className="flex items-center justify-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Wrench className="h-6 w-6 text-red-600 mr-2" />
              <span className="text-red-800 font-medium">Make Appointment</span>
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className="flex items-center justify-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <HelpCircle className="h-6 w-6 text-orange-600 mr-2" />
              <span className="text-orange-800 font-medium">View FAQ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppointmentModal = () => (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        showAppointmentModal ? '' : 'hidden'
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-30"
        onClick={() => setShowAppointmentModal(false)}
      ></div>
      <div className="relative bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">
          Book a Service Appointment
        </h3>
        <div className="space-y-4">
          <select
            value={appointmentData.service}
            onChange={(e) =>
              setAppointmentData({
                ...appointmentData,
                service: e.target.value,
              })
            }
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="">Select Service</option>
            <option value="ductless-maintenance">Maintenance</option>
            <option value="ductless-repair">Repair</option>
            <option value="ductless-upgrade">Upgrade</option>
          </select>
          <input
            type="date"
            value={appointmentData.date}
            onChange={(e) =>
              setAppointmentData({ ...appointmentData, date: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg"
          />
          <input
            type="time"
            value={appointmentData.time}
            onChange={(e) =>
              setAppointmentData({ ...appointmentData, time: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg"
          />
          <button
            onClick={() => {
              if (
                appointmentData.service &&
                appointmentData.date &&
                appointmentData.time
              ) {
                alert(
                  `Appointment for ${appointmentData.service} booked on ${appointmentData.date} at ${appointmentData.time}`
                );
                setShowAppointmentModal(false);
                setAppointmentData({ service: '', date: '', time: '' });
              } else {
                alert('Please fill in all fields.');
              }
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Thermometer className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">DuctlessSupport</h1>
            </div>
            <div className="flex items-center space-x-4 relative">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>1-800-DUCTLESS</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>support@ductless.com</span>
              </div>
              <div className="relative group">
                <User className="h-6 w-6 text-gray-700 cursor-pointer" />
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">Profile</button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">Settings</button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render Main Tab */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && renderDashboard()}
        {/* Add other render functions for chat, ticket, faq if needed */}
        {renderAppointmentModal()}
      </div>
    </div>
  );
};

export default CustomerServicesPortal;
