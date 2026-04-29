import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/common/Navbar";
import Dashboard from "./pages/Dashboard";
import StudentList from "./components/students/StudentList";
import StudentDetail from "./components/students/StudentDetail";
import StudentForm from "./components/students/StudentForm";
import AddCorporationQuickSetupStep2 from "./pages/corporation/AddCorporationQuickSetupStep2";

const MainLayout: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <footer className="text-center py-3 text-muted small border-top mt-4 bg-white">
      Student Management System &copy; {new Date().getFullYear()} — Built with
      Node.js, PostgreSQL &amp; React
    </footer>
  </>
);

const AppShell: React.FC = () => {
  const location = useLocation();
  const isCorporationDirectory = location.pathname.startsWith(
    "/corporation-directory"
  );
  return (
    <div
      className={
        isCorporationDirectory ? "tw-min-h-screen" : "min-vh-100 bg-light"
      }
    >
        <Routes>
          <Route
            path="/corporation-directory/add/quick-setup/step-2"
            element={<AddCorporationQuickSetupStep2 />}
          />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="students" element={<StudentList />} />
            <Route path="students/new" element={<StudentForm />} />
            <Route path="students/:id" element={<StudentDetail />} />
            <Route path="students/:id/edit" element={<StudentForm />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <AppShell />
  </Router>
);

export default App;
