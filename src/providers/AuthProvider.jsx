import {createContext, useEffect, useState} from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../config/firebase";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  const createUser = (email, password) => {
    setIsUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setIsUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setIsUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setIsUserLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    let updateObject = {};
    if (name) updateObject.displayName = name;
    if (photo) updateObject.photoURL = photo;
    return updateProfile(auth.currentUser, updateObject);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log(`Loggedin user ---> ${currentUser?.email}`);
      setIsUserLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const values = {
    user,
    signIn,
    logOut,
    createUser,
    isUserLoading,
    updateUserProfile,
    setIsUserLoading,
    loginWithGoogle
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
