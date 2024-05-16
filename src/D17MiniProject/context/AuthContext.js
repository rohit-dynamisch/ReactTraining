import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import UseLocalStorage from "./useLocalStorage";

const AuthContext = createContext({
  userAuth: null,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const [userAuth, setUserAuth] = useState(null);
  //-----------------------------------get user data from localstorage-----------------------------
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) login(user);
  }, []);

  //---------------------------------login user function-------------------------------------------
  function login(userData) {
    setUserAuth(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  //----------------------------------logout user function-----------------------------------------
  function logout() {
    setUserAuth(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ userAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const { userAuth, login, logout } = useContext(AuthContext);
  return { userAuth, login, logout };
}
