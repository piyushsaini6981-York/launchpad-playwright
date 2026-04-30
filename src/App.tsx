import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Dashboard from "./pages/Dashboard";
import StudentList from "./components/students/StudentList";
import StudentDetail from "./components/students/StudentDetail";
import StudentForm from "./components/students/StudentForm";
import CorporationCompanyDetailsPage from "./pages/CorporationCompanyDetailsPage";

function MainShell() {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <Outlet />
      <footer className="mt-4 border-top bg-white py-3 text-center text-muted small">
        Student Management System &copy; {new Date().getFullYear()} — Built with
        Node.js, PostgreSQL &amp; React
      </footer>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/corporation/company-details"
          element={<CorporationCompanyDetailsPage />}
        />
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
