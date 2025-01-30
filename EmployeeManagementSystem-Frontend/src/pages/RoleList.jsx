import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRoles, deleteRole } from '../services/roleService';

export default function RoleList() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const data = await getRoles();
      setRoles(data);
    } catch (error) {
      console.error('Failed to fetch roles:', error);
      setRoles([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRole(id);
      fetchRoles();
    } catch (error) {
      console.error('Failed to delete role:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-header flex justify-between items-center">
        <h2 className="card-title">Roles</h2>
        <Link to="/roles/add" className="btn btn-success">
          Add Role
        </Link>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.rid}>
              <td>{role.rname}</td>
              <td>
                <div className="action-buttons">
                  <Link
                    to={`/roles/edit/${role.rid}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(role.rid)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}