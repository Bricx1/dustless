import React from 'react';

const appointmentsData = [
  {
    id: 1,
    name: 'John Doe',
    date: '2025-07-01',
    time: '10:00 AM',
    service: 'Duct Cleaning',
    status: 'Confirmed',
  },
  {
    id: 2,
    name: 'Jane Smith',
    date: '2025-07-01',
    time: '11:30 AM',
    service: 'Dryer Vent Cleaning',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Michael Brown',
    date: '2025-07-01',
    time: '2:00 PM',
    service: 'HVAC Inspection',
    status: 'Cancelled',
  },
];

const Appointments = () => (
  <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="text-3xl font-bold text-blue-600">12</div>
        <div className="text-sm text-gray-600">Today's Appointments</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="text-3xl font-bold text-green-600">360</div>
        <div className="text-sm text-gray-600">Total Appointments</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="text-3xl font-bold text-red-600">48</div>
        <div className="text-sm text-gray-600">Complete</div>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Appointments List</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Date</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Time</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Service</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((appointment) => (
                <tr key={appointment.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 font-medium">{appointment.name}</td>
                  <td className="py-3">{appointment.date}</td>
                  <td className="py-3">{appointment.time}</td>
                  <td className="py-3">{appointment.service}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        appointment.status === 'Confirmed'
                          ? 'bg-green-100 text-green-800'
                          : appointment.status === 'Completed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Appointments;
