import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRoleById, updateRole } from '../services/roleService';

export default function EditRole() {
  const { id } = useParams();
  const [role, setRole] = useState({ rname: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchRole();
  }, []);

  const fetchRole = async () => {
    const data = await getRoleById(id);
    setRole(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateRole(id, role);
    navigate('/roles');
  };

  return (
    <div className="form-container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Edit Role</h2>
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
              Update Role
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