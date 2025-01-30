import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDepartments, deleteDepartment } from '../services/departmentService';

export default function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const data = await getDepartments();
      setDepartments(data);
    } catch (error) {
      console.error('Failed to fetch departments:', error);
      setDepartments([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepartment(id);
      fetchDepartments();
    } catch (error) {
      console.error('Failed to delete department:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-header flex justify-between items-center">
        <h2 className="card-title">Departments</h2>
        <Link to="/departments/add" className="btn btn-success">
          Add Department
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
          {departments.map((department) => (
            <tr key={department.did}>
              <td>{department.dname}</td>
              <td>
                <div className="action-buttons">
                  <Link
                    to={`/departments/edit/${department.did}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(department.did)}
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