import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

/** Keeps SPA paths only (same-origin navigation). */
function safeReturnPath(fullPath: string): string | undefined {
  if (!fullPath.startsWith("/") || fullPath.startsWith("//")) return undefined;
  return fullPath;
}

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    const attempt = `${location.pathname}${location.search}${location.hash}`;
    const from = safeReturnPath(attempt) ?? "/";

    return (
      <Navigate
        to="/login"
        replace
        state={{ from }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
