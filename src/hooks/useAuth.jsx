import { useContext } from "react";
import AuthContext from "../contextApi/authContext";

export const useAuth = () => {
  
  return useContext(AuthContext);
};
