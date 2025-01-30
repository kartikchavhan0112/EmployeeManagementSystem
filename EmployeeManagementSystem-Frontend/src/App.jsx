import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import DepartmentList from './pages/DepartmentList';
import AddDepartment from './pages/AddDepartment';
import EditDepartment from './pages/EditDepartment';
import RoleList from './pages/RoleList';
import AddRole from './pages/AddRole';
import EditRole from './pages/EditRole';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/employees/add" element={<AddEmployee />} />
              <Route path="/employees/edit/:id" element={<EditEmployee />} />
              <Route path="/departments" element={<DepartmentList />} />
              <Route path="/departments/add" element={<AddDepartment />} />
              <Route path="/departments/edit/:id" element={<EditDepartment />} />
              <Route path="/roles" element={<RoleList />} />
              <Route path="/roles/add" element={<AddRole />} />
              <Route path="/roles/edit/:id" element={<EditRole />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;