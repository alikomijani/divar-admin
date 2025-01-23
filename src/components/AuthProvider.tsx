"use client";
import React, { createContext, ReactNode, useContext } from "react";

type Props = {
  children: ReactNode;
  accessToken: string;
};

export const AuthContext = createContext({
  accessToken: "",
});

export default function AuthProvider({ children, accessToken }: Props) {
  return (
    <AuthContext.Provider
      value={{
        accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const { accessToken } = useContext(AuthContext);
  return accessToken;
}
