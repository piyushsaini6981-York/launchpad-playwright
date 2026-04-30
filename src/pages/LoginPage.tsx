import React, { FormEvent, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { DEMO_PASSWORD, DEMO_USERNAME } from "../auth/demoCredentials";
import { useAuth } from "../context/AuthContext";

type LocationState = { from?: { pathname?: string } };

const LoginPage: React.FC = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from =
    (location.state as LocationState | null)?.from?.pathname ?? "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const ok = login(username, password);
    if (ok) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <div className="w-100" style={{ maxWidth: 420 }}>
        <div className="card shadow-sm border-0">
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-4">
              <span className="fs-2 d-block mb-2" aria-hidden>
                🎓
              </span>
              <h1 className="h4 fw-bold text-primary mb-1">
                Student Manager
              </h1>
              <p className="text-muted small mb-0">Sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {error && (
                <div
                  className="alert alert-danger py-2 small"
                  role="alert"
                  aria-live="polite"
                >
                  {error}
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="login-username" className="form-label">
                  Username
                </label>
                <input
                  id="login-username"
                  name="username"
                  type="text"
                  className="form-control"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="login-password" className="form-label">
                  Password
                </label>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  className="form-control"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign in
              </button>
            </form>

            <p className="text-muted small text-center mt-4 mb-0">
              Demo account:{" "}
              <code className="user-select-all">
                {DEMO_USERNAME}
              </code>{" "}
              /{" "}
              <code className="user-select-all">{DEMO_PASSWORD}</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
