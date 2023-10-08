import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //for getting email and pass
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //setup login functionality
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //for logout
  const logOut = () => {
    return signOut(auth);
  };

  //use effect create for notice user state changes

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser, //ekhan theke pathale register theke user korbe
    logOut,
    logIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
