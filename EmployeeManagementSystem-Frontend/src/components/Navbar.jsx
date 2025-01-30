
import './Navbar.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Employee Management System</h1>
      </div>
      <div className="navbar-links">
        <a href="/" className="active">Home</a>
        <a href="/employees">Employees</a>
        <a href="/departments">Departments</a>
        <a href="/roles">Roles</a>
      </div>
    </nav>
  );
}