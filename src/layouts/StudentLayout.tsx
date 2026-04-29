import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../components/common/Navbar";

const StudentLayout: React.FC = () => {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="text-center py-3 text-muted small border-top mt-4 bg-white">
        Student Management System &copy; {new Date().getFullYear()} — Built
        with Node.js, PostgreSQL &amp; React
      </footer>
    </div>
  );
};

export default StudentLayout;
