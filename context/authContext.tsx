"use client";

import { useSession } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";

interface User {
  email?: string | null | undefined;
  name?: string | null | undefined;
  image?: string | null | undefined;
}

interface AuthContextType {
  user: User | undefined;
  setUser: ({}: any) => void;
}

const defaultAuthContext: AuthContextType = {
  user: undefined,
  setUser: () => {},
};
const AuthContext = React.createContext<AuthContextType>(defaultAuthContext);

const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      setUser(session.user);
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
