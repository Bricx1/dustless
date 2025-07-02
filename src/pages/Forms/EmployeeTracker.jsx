import React, { useState } from 'react';
import { Users, UserPlus, Trash2, Search, Calendar, Mail, Phone, MapPin } from 'lucide-react';

const EmployeeTracker = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Smith",
      position: "Software Developer",
      department: "IT",
      email: "john.smith@company.com",
      phone: "(555) 123-4567",
      hireDate: "2023-01-15",
      salary: "$75,000",
      status: "Active"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Marketing Manager",
      department: "Marketing",
      email: "sarah.johnson@company.com",
      phone: "(555) 234-5678",
      hireDate: "2022-08-20",
      salary: "$68,000",
      status: "Active"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    department: "",
    email: "",
    phone: "",
    hireDate: "",
    salary: ""
  });

  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.position) {
      const employee = {
        id: Date.now(),
        ...newEmployee,
        status: "Active"
      };
      setEmployees([...employees, employee]);
      setNewEmployee({
        name: "",
        position: "",
        department: "",
        email: "",
        phone: "",
        hireDate: "",
        salary: ""
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to remove this employee?")) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
                <p className="text-gray-600">Track and manage your workforce</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-600">Total Employees</span>
                <div className="text-2xl font-bold text-blue-600">{employees.length}</div>
              </div>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <UserPlus className="h-5 w-5" />
                <span>Add Employee</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search employees by name, position, or department..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Add Employee Form */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Add New Employee</h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Position*"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newEmployee.position}
                    onChange={(e) => setNewEmployee({...newEmployee, position: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Department"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newEmployee.department}
                    onChange={(e) => setNewEmployee({...newEmployee, department: e.target.value})}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newEmployee.email}
                    onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newEmployee.phone}
                    onChange={(e) => setNewEmployee({...newEmployee, phone: e.target.value})}
                  />
                  <input
                    type="date"
                    placeholder="Hire Date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newEmployee.hireDate}
                    onChange={(e) => setNewEmployee({...newEmployee, hireDate: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Salary (e.g., $50,000)"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                    value={newEmployee.salary}
                    onChange={(e) => setNewEmployee({...newEmployee, salary: e.target.value})}
                  />
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={handleAddEmployee}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Add Employee
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Employee List */}
        <div className="grid gap-6">
          {filteredEmployees.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Employees Found</h3>
              <p className="text-gray-500">
                {searchTerm ? "Try adjusting your search terms" : "Add your first employee to get started"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEmployees.map((employee) => (
                <div key={employee.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{employee.name}</h3>
                        <p className="text-blue-600 font-semibold">{employee.position}</p>
                        {employee.department && (
                          <p className="text-gray-600 text-sm">{employee.department}</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleDeleteEmployee(employee.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        title="Remove Employee"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      {employee.email && (
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Mail className="h-4 w-4" />
                          <span>{employee.email}</span>
                        </div>
                      )}
                      {employee.phone && (
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          <span>{employee.phone}</span>
                        </div>
                      )}
                      {employee.hireDate && (
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>Hired: {new Date(employee.hireDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      {employee.salary && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <span className="text-green-600 font-semibold">{employee.salary}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {employee.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTracker;