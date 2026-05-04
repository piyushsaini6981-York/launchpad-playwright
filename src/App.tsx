import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/common/Navbar";
import Dashboard from "./pages/Dashboard";
import StudentList from "./components/students/StudentList";
import StudentDetail from "./components/students/StudentDetail";
import StudentForm from "./components/students/StudentForm";
import CompanyDirectoryBasicInfoPage from "./pages/CompanyDirectoryBasicInfoPage";
import CompanyDirectoryKeyContactsPage from "./pages/CompanyDirectoryKeyContactsPage";
import CompanyDirectoryPlanSeatsPage from "./pages/CompanyDirectoryPlanSeatsPage";
import CompanyDirectoryConfigurationPage from "./pages/CompanyDirectoryConfigurationPage";

const MainShell: React.FC = () => (
  <div className="min-vh-100 bg-light">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <footer className="text-center py-3 text-muted small border-top mt-4 bg-white">
      Student Management System &copy; {new Date().getFullYear()} — Built with Node.js, PostgreSQL &amp;
      React
    </footer>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/company-directory" element={<Navigate to="/company-directory/key-contacts" replace />} />
        <Route path="/company-directory/basic-info" element={<CompanyDirectoryBasicInfoPage />} />
        <Route path="/company-directory/key-contacts" element={<CompanyDirectoryKeyContactsPage />} />
        <Route path="/company-directory/plan-seats" element={<CompanyDirectoryPlanSeatsPage />} />
        <Route path="/company-directory/configuration" element={<CompanyDirectoryConfigurationPage />} />
        <Route element={<MainShell />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/new" element={<StudentForm />} />
          <Route path="/students/:id" element={<StudentDetail />} />
          <Route path="/students/:id/edit" element={<StudentForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
