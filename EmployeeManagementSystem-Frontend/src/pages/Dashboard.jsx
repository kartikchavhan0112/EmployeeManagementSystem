import React, { useEffect, useState } from 'react';
import { getEmployees } from '../services/employeeService';
import { getDepartments } from '../services/departmentService';
import { getRoles } from '../services/roleService';

export default function Dashboard() {
  const [employeesCount, setEmployeesCount] = useState(0);
  const [departmentsCount, setDepartmentsCount] = useState(0);
  const [rolesCount, setRolesCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all counts in parallel
        const [employees, departments, roles] = await Promise.all([
          getEmployees(),
          getDepartments(),
          getRoles()
        ]);

        setEmployeesCount(employees.length);
        setDepartmentsCount(departments.length);
        setRolesCount(roles.length);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Dashboard Overview</h2>
      </div>
      
      <div className="flex mt-2 gap-2">
        <div className="card flex-1">
          <h3>Total Employees</h3>
          {loading ? (
            <p className="mt-1">Loading...</p>
          ) : error ? (
            <p className="text-danger">Error: {error}</p>
          ) : (
            <p className="mt-1 text-xl font-bold">{employeesCount}</p>
          )}
        </div>
        
        <div className="card flex-1">
          <h3>Departments</h3>
          {loading ? (
            <p className="mt-1">Loading...</p>
          ) : error ? (
            <p className="text-danger">Error: {error}</p>
          ) : (
            <p className="mt-1 text-xl font-bold">{departmentsCount}</p>
          )}
        </div>
        
        <div className="card flex-1">
          <h3>Roles</h3>
          {loading ? (
            <p className="mt-1">Loading...</p>
          ) : error ? (
            <p className="text-danger">Error: {error}</p>
          ) : (
            <p className="mt-1 text-xl font-bold">{rolesCount}</p>
          )}
        </div>
      </div>
    </div>
  );
}