
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/employees" className={({ isActive }) => isActive ? 'active' : ''}>
              Employees
            </NavLink>
          </li>
          <li>
            <NavLink to="/departments" className={({ isActive }) => isActive ? 'active' : ''}>
              Departments
            </NavLink>
          </li>
          <li>
            <NavLink to="/roles" className={({ isActive }) => isActive ? 'active' : ''}>
              Roles
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}