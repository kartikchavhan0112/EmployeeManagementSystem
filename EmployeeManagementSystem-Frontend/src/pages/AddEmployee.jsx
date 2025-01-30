import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../services/employeeService';

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    ename: '',
    eemail: '',
    esalary: 0, // Initialize salary
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(employee);
      navigate('/employees'); // Redirect to the employee list after successful addition
    } catch (error) {
      console.error('Failed to add employee:', error);
    }
  };

  return (
    <div className="form-container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Add New Employee</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-2">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={employee.ename}
              onChange={(e) => setEmployee({ ...employee, ename: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={employee.eemail}
              onChange={(e) => setEmployee({ ...employee, eemail: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input
              type="number"
              value={employee.esalary}
              onChange={(e) => setEmployee({ ...employee, esalary: parseFloat(e.target.value) || 0 })}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              Save Employee
            </button>
            <button
              type="button"
              onClick={() => navigate('/employees')}
              className="btn btn-danger"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}