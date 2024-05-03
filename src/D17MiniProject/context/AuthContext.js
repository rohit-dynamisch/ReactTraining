import { useContext } from "react";
import { createContext, useState } from "react";

const AuthContext=createContext({
    userAuth:"",
    login:()=>{},
    logout:()=>{}
});

export function AuthContextProvider({children}){
    const [userAuth,setUserAuth]=useState([]);
    function login(userData) {
        setUserAuth(userData)
      }
  
      function logout(){
          setUserAuth(null)
        //   localStorage.removeItem('user')
      }
    
    return(
        <AuthContext.Provider value={{userAuth,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
    
}

export function useAuthContext(){
    const {userAuth,login,logout}=useContext(AuthContext);
    return {userAuth,login,logout};
}