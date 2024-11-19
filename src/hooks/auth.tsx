import React, { createContext,
     useCallback, useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useConfig } from './config';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface User {
  id?: string;
  email?: string | null;
}

interface AuthContext {
  user: User;
  login(userName: string, password: string): void;
  logout(): void;
  createAccount(userName: string, password: string): void;
}

const AuthContext = createContext<AuthContext | null>(null);
const userFirebase = auth().currentUser;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User>({id: userFirebase?.uid, email: userFirebase?.email});
  const {resetConfig, listenData} = useConfig();
  const {reset} = useNavigation();

   useEffect(() => {
    async function loadUser(): Promise<void> {
     auth().onAuthStateChanged(async (userFirebaseStateChanged) => {
      if (userFirebaseStateChanged) {
        setUser({id: userFirebaseStateChanged.uid, email: userFirebaseStateChanged.email});

        } else {
        setUser({id:'', email: ''});
        console.log('Connect not working');
        }
      });
    }

    loadUser();
  }, [user.email]);

  const createAccount = useCallback(
    async (userName: string, password: string) => {
      auth()
      .createUserWithEmailAndPassword(userName, password)
      .then((userFirebaseCreateAccount) => {
        setUser({id: userFirebaseCreateAccount.user.uid, email: userFirebaseCreateAccount.user.email});

        console.log('Create account in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        Alert.alert('Erro:', `${error}`);
        console.log(error);
      });

    },
    [],
  );

  const login = useCallback(
    async (userName: string, password: string) => {
      auth()
      .signInWithEmailAndPassword(userName, password)
      .then((userFirebaseLogin) => {
        setUser({id: userFirebaseLogin.user.uid, email: userFirebaseLogin.user.email});
        listenData(userFirebaseLogin.user.uid);
         reset({
          index: 0,
          routes: [{ name: 'RenderScreen' }],
        });
        console.log('Signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
    },
    [],
  );

 const logout = useCallback(
    async () => {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
        resetConfig();

        reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        });
      },
    [reset, resetConfig],
  );

  const value = React.useMemo(
    () => ({ login, logout, createAccount,  user }),
    [login, logout, createAccount, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth(): AuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export {AuthProvider, useAuth};
