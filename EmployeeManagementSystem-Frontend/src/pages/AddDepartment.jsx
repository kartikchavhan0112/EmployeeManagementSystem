import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDepartment } from '../services/departmentService';

export default function AddDepartment() {
  const [department, setDepartment] = useState({ dname: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDepartment(department);
    navigate('/departments');
  };

  return (
    <div className="form-container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Add New Department</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-2">
          <div className="form-group">
            <label>Department Name</label>
            <input
              type="text"
              value={department.dname}
              onChange={(e) => setDepartment({ dname: e.target.value })}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              Save Department
            </button>
            <button
              type="button"
              onClick={() => navigate('/departments')}
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