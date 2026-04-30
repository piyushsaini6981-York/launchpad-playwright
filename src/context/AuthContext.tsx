import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { DEMO_PASSWORD, DEMO_USERNAME } from "../auth/demoCredentials";

const AUTH_STORAGE_KEY = "student_management_auth";

type AuthContextValue = {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<string | null>(() =>
    typeof window !== "undefined"
      ? window.localStorage.getItem(AUTH_STORAGE_KEY)
      : null
  );

  const login = useCallback((username: string, password: string) => {
    const ok =
      username.trim() === DEMO_USERNAME && password === DEMO_PASSWORD;
    if (ok) {
      window.localStorage.setItem(AUTH_STORAGE_KEY, "1");
      setSession("1");
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    setSession(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: Boolean(session),
      login,
      logout,
    }),
    [session, login, logout]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
