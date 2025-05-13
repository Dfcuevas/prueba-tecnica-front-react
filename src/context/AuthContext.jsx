import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email) => {
    //simulacion de backend
    console.log("Hizo login ", email);
  };
  const logout = () => {
    setUser(null);
    console.log("Se desconecto la presa");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
