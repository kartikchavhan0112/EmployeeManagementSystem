import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../services/employeeService';

export default function EditEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState({ 
    ename: '', 
    eemail: '', 
    esalary: 0 
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const data = await getEmployeeById(id);
      // Ensure all fields are defined
      setEmployee({
        ename: data.ename || '',
        eemail: data.eemail || '',
        esalary: data.esalary || 0,
      });
    } catch (error) {
      console.error('Failed to fetch employee:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, employee);
      navigate('/employees');
    } catch (error) {
      console.error('Failed to update employee:', error);
    }
  };

  return (
    <div className="form-container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Edit Employee</h2>
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
              Update Employee
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