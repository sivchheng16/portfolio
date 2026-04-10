import React, { createContext, useContext, useEffect, useState } from 'react';
import { authApi } from '../lib/api';
import { toast } from 'sonner';

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (data: any) => Promise<void>;
  signUp: (data: any) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      const savedUser = localStorage.getItem('auth_user');
      const savedToken = localStorage.getItem('auth_token');

      if (savedUser && savedToken) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {
          console.error("Failed to parse user data", e);
          localStorage.removeItem('auth_user');
          localStorage.removeItem('auth_token');
        }
      }
      setLoading(false);
    };

    initializeAuth();

    // Listen for cross-component auth changes (e.g. 401 errors)
    const handleAuthChange = () => {
      setUser(null);
    };

    window.addEventListener('auth-status-changed', handleAuthChange);
    return () => window.removeEventListener('auth-status-changed', handleAuthChange);
  }, []);

  const signIn = async (data: any) => {
    try {
      const response = await authApi.signIn(data);
      if (response.token && response.user) {
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('auth_user', JSON.stringify(response.user));
        setUser(response.user);
        toast.success("Welcome back!");
      }
    } catch (error: any) {
      toast.error(error.message || "Login failed");
      throw error;
    }
  };

  const signUp = async (data: any) => {
    try {
      const response = await authApi.signUp(data);
      if (response.token && response.user) {
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('auth_user', JSON.stringify(response.user));
        setUser(response.user);
        toast.success("Account created successfully!");
      }
    } catch (error: any) {
      toast.error(error.message || "Registration failed");
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await authApi.signOut();
    } catch (error) {
      console.error("Logout failed at server, cleaning up local state", error);
    } finally {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
      setUser(null);
      toast.info("Logged out successfully");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
