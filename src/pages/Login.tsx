import React, { FormEvent, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";
import { DUMMY_EMAIL, DUMMY_PASSWORD } from "../constants/auth";

const Login: React.FC = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  /** Where to send the user after login (set by ProtectedRoute when redirecting guests). */
  const redirectAfterLogin = (): string => {
    const raw = (location.state as { from?: string } | undefined)?.from ?? "/";
    if (typeof raw !== "string") return "/";
    if (!raw.startsWith("/") || raw.startsWith("//")) return "/";
    if (raw === "/login") return "/";
    return raw;
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const ok = login(email, password);
      if (ok) {
        navigate(redirectAfterLogin(), { replace: true });
      } else {
        setError("Invalid email or password.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <div className="w-100" style={{ maxWidth: 420 }}>
        <div className="card border-0 shadow">
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-4">
              <div className="fs-2 mb-2">🎓</div>
              <h1 className="h4 fw-bold mb-1">Student Manager</h1>
              <p className="text-muted small mb-0">Sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {error && (
                <div
                  className="alert alert-danger py-2 small"
                  role="alert"
                  data-testid="login-error"
                >
                  {error}
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="login-email" className="form-label">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  className="form-control"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="login-email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="login-password" className="form-label">
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  className="form-control"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="login-password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={submitting}
                data-testid="login-submit"
              >
                {submitting ? "Signing in…" : "Sign in"}
              </button>
            </form>

            <hr className="my-4" />
            <p className="small text-muted mb-1 fw-semibold">Demo credentials</p>
            <p className="small text-muted mb-0 font-monospace">
              {DUMMY_EMAIL}
              <br />
              {DUMMY_PASSWORD}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
