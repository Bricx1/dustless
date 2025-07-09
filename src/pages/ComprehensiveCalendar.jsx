import React, { useState } from 'react';
import {
  ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon,
  Clock, MapPin, Users, Edit3, Trash2
} from 'lucide-react';

const ComprehensiveCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month');
  const [showEventModal, setShowEventModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = {
    'duct-cleaning': {
      label: 'Duct Cleaning',
      color: 'bg-blue-500',
      textColor: 'text-blue-700',
      bgLight: 'bg-blue-50'
    },
    'dryer-vent': {
      label: 'Dryer Vent Cleaning',
      color: 'bg-yellow-500',
      textColor: 'text-yellow-700',
      bgLight: 'bg-yellow-50'
    },
    'hvac-coil': {
      label: 'HVAC Coil Cleaning',
      color: 'bg-green-500',
      textColor: 'text-green-700',
      bgLight: 'bg-green-50'
    },
    'mini-split': {
      label: 'Mini Split Installation',
      color: 'bg-purple-500',
      textColor: 'text-purple-700',
      bgLight: 'bg-purple-50'
    }
  };

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Duct Cleaning Appointment – John',
      date: new Date(2025, 6, 10),
      time: '9:00 AM',
      category: 'duct-cleaning',
      location: 'Toronto',
      attendees: ['John'],
      description: 'Advanced HEPA filtration & antimicrobial solutions.',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Dryer Vent Cleaning – Smith Residence',
      date: new Date(2025, 6, 11),
      time: '11:30 AM',
      category: 'dryer-vent',
      location: 'Markham',
      attendees: ['Technician A'],
      description: 'Prevents fire hazards and improves energy use.',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'HVAC Coil Cleaning – Office Unit',
      date: new Date(2025, 6, 12),
      time: '2:00 PM',
      category: 'hvac-coil',
      location: 'Scarborough',
      attendees: ['Team B'],
      description: 'Boost HVAC performance and air purity.',
      priority: 'medium'
    },
    {
      id: 4,
      title: 'Mini Split Installation – Zone A',
      date: new Date(2025, 6, 15),
      time: '3:00 PM',
      category: 'mini-split',
      location: 'Durham',
      attendees: ['Installer Team'],
      description: 'Efficient ductless systems with zone control.',
      priority: 'high'
    }
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    category: 'duct-cleaning',
    location: '',
    attendees: '',
    description: '',
    priority: 'medium'
  });

  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  const navigateMonth = (dir) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + dir);
    setCurrentDate(newDate);
  };

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const getEventsForDate = (date) => {
    return events.filter(
      (e) =>
        e.date.getFullYear() === date.getFullYear() &&
        e.date.getMonth() === date.getMonth() &&
        e.date.getDate() === date.getDate()
    );
  };

  const filteredEvents = events.filter((e) => {
    const matchesCategory = filterCategory === 'all' || e.category === filterCategory;
    const matchesSearch = e.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      const date = new Date(newEvent.date);
      setEvents([
        ...events,
        {
          ...newEvent,
          id: Date.now(),
          date,
          attendees: newEvent.attendees.split(',').map((a) => a.trim())
        }
      ]);
      setNewEvent({
        title: '',
        date: '',
        time: '',
        category: 'duct-cleaning',
        location: '',
        attendees: '',
        description: '',
        priority: 'medium'
      });
      setShowEventModal(false);
    }
  };

  const renderCalendarGrid = () => {
    const days = [];
    const totalDays = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border" />);
    }

    for (let d = 1; d <= totalDays; d++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), d);
      const dailyEvents = getEventsForDate(date);
      const isToday =
        date.toDateString() === today.toDateString();

      days.push(
        <div key={d} className={`p-2 border h-24 ${isToday ? 'bg-blue-50' : ''}`}>
          <div className={`text-sm font-bold ${isToday ? 'text-blue-600' : ''}`}>{d}</div>
          {dailyEvents.slice(0, 2).map((event) => (
            <div
              key={event.id}
              className={`text-xs mt-1 px-1 rounded ${categories[event.category].bgLight} ${categories[event.category].textColor}`}
            >
              {event.title}
            </div>
          ))}
          {dailyEvents.length > 2 && (
            <div className="text-xs text-gray-400 mt-1">+{dailyEvents.length - 2} more</div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Service Calendar</h2>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-1 rounded"
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="all">All</option>
            {Object.entries(categories).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label}
              </option>
            ))}
          </select>
          <button onClick={() => setShowEventModal(true)} className="bg-blue-600 text-white px-3 py-1 rounded flex items-center">
            <Plus className="w-4 h-4 mr-1" /> Add
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <button onClick={() => navigateMonth(-1)}>
          <ChevronLeft />
        </button>
        <h3 className="text-lg font-semibold">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button onClick={() => navigateMonth(1)}>
          <ChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center bg-gray-100 font-semibold text-sm">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-2 border">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 border-l border-b">
        {renderCalendarGrid()}
      </div>

      {/* Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-xl">
            <h3 className="text-lg font-bold mb-4">Add Event</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="border p-2 rounded w-full"
              />
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="border p-2 rounded w-full"
              />
              <input
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Location"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Attendees (comma-separated)"
                value={newEvent.attendees}
                onChange={(e) => setNewEvent({ ...newEvent, attendees: e.target.value })}
                className="border p-2 rounded w-full"
              />
              <textarea
                placeholder="Description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                className="border p-2 rounded w-full"
              />
              <select
                value={newEvent.category}
                onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                className="border p-2 rounded w-full"
              >
                {Object.entries(categories).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setShowEventModal(false)} className="border px-4 py-2 rounded">
                Cancel
              </button>
              <button onClick={handleAddEvent} className="bg-blue-600 text-white px-4 py-2 rounded">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComprehensiveCalendar;
