/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import LocalStorageHelper from "../utils/handleLocalStorage";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import supabase from "../libs/suspabase";

const AuthContext = createContext({
  user: null,
  setUser: (data) => {},
  handleLogout: () => {},
  loading: false,
});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const { getItem, setItem, clear } = LocalStorageHelper;
  const getUser = getItem("auth");
  const [user, setUser] = useState(getUser ? getUser : null);
  const naviaget = useNavigate();
  useEffect(() => {
    if (user) {
      setItem("auth", user);
    }
  }, [user, setItem]);

  const handleLogout = async () => {
    setLoading(true);
    try {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      clear();
      naviaget("/auth/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleLogout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
