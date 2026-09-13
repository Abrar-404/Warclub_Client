import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from 'firebase/auth';

import { auth } from './../Config/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleRegister = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const googleRegisterRedirect = () => {
    setLoading(true);
    return signInWithRedirect(auth, googleProvider);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const passwordReset = email => {
    return sendPasswordResetEmail(auth, email);
  };

  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    // Process redirect result if returning from a redirect sign-in
    getRedirectResult(auth)
      .then(result => {
        if (result?.user) {
          console.log('Redirect sign-in successful:', result.user);
        }
      })
      .catch(err => {
        console.warn('Redirect sign-in notice:', err.message);
      });

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    googleRegister,
    googleRegisterRedirect,
    loginUser,
    userLogOut,
    passwordReset,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
