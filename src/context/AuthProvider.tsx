"use client"; // Next.js 13+ এ client component করতে হবে

import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: any;
  setUser: (user: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const info = {user, setUser}
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
}