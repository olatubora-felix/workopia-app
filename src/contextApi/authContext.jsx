/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import LocalStorageHelper from "../utils/handleLocalStorage";
import { useNavigate } from "react-router";

const AuthContext = createContext({
  user: null,
  setUser: (data) => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const { getItem, setItem, clear } = LocalStorageHelper;
  const getUser = getItem("auth");
  const [user, setUser] = useState(getUser ? getUser : null);
  const naviaget = useNavigate();
  useEffect(() => {
    if (user) {
      setItem("auth", user);
    }
  }, [user, setItem]);
  const handleLogout = () => {
    setUser(null);
    clear();
    naviaget("/auth/login");
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
