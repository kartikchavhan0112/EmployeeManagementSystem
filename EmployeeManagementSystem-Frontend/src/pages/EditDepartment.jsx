import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDepartmentById, updateDepartment } from '../services/departmentService';

export default function EditDepartment() {
  const { id } = useParams();
  const [department, setDepartment] = useState({ dname: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartment();
  }, []);

  const fetchDepartment = async () => {
    try {
      const data = await getDepartmentById(id);
      setDepartment({ dname: data.dname || '' }); // Ensure dname is defined
    } catch (error) {
      console.error('Failed to fetch department:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDepartment(id, department);
      navigate('/departments');
    } catch (error) {
      console.error('Failed to update department:', error);
    }
  };

  return (
    <div className="form-container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Edit Department</h2>
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
              Update Department
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