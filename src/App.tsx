import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import StudentLayout from "./layouts/StudentLayout";
import CorporationDirectoryLayout from "./layouts/CorporationDirectoryLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import StudentList from "./components/students/StudentList";
import StudentDetail from "./components/students/StudentDetail";
import StudentForm from "./components/students/StudentForm";
import AddCorporationQuickSetupStep2 from "./pages/AddCorporationQuickSetupStep2";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<StudentLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<StudentList />} />
              <Route path="/students/new" element={<StudentForm />} />
              <Route path="/students/:id" element={<StudentDetail />} />
              <Route path="/students/:id/edit" element={<StudentForm />} />
            </Route>
            <Route
              path="/corporation-directory"
              element={<CorporationDirectoryLayout />}
            >
              <Route index element={<Navigate to="add" replace />} />
              <Route path="add" element={<AddCorporationQuickSetupStep2 />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
