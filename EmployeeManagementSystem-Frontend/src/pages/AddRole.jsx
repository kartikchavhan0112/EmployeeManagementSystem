import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRole } from '../services/roleService';

export default function AddRole() {
  const [role, setRole] = useState({ rname: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRole(role);
    navigate('/roles');
  };

  return (
    <div className="form-container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Add New Role</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-2">
          <div className="form-group">
            <label>Role Name</label>
            <input
              type="text"
              value={role.rname}
              onChange={(e) => setRole({ rname: e.target.value })}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              Save Role
            </button>
            <button
              type="button"
              onClick={() => navigate('/roles')}
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