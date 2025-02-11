"use client";
import Axios from "@/api/client-api/base";
import type { ReactNode} from "react";
import React, { createContext, useContext } from "react";

type Props = {
  children: ReactNode;
  accessToken: string;
};

export const AuthContext = createContext({
  accessToken: "",
});

export default function AuthProvider({ children, accessToken }: Props) {
  if (accessToken) {
    Axios.defaults.headers.common["Authorization"] = "bearer " + accessToken;
  }
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
