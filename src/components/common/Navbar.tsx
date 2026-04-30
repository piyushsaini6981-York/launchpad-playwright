import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          to="/"
        >
          <span className="fs-4">🎓</span>
          <span>Student Manager</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-1">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 rounded ${isActive ? "active bg-white bg-opacity-25 fw-semibold" : ""}`
                }
                to="/"
                end
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 rounded ${isActive ? "active bg-white bg-opacity-25 fw-semibold" : ""}`
                }
                to="/students"
              >
                Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 rounded ${isActive ? "active bg-white bg-opacity-25 fw-semibold" : ""}`
                }
                to="/students/new"
              >
                + Add Student
              </NavLink>
            </li>
            <li className="nav-item d-flex align-items-center ms-lg-2">
              <button
                type="button"
                className="btn btn-outline-light btn-sm"
                onClick={handleLogout}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
