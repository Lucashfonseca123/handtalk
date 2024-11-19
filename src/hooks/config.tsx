import React, { createContext,
     useCallback, useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { ToastAndroid } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

interface IConfigContext {
  config?: IConfig;
  listenData(id: string): void;
  saveConfig(config: IConfig, id: string): void;
  resetConfig(): void;
}

export interface IObject {
  shape?: string;
  color?: string;
  rotation?: string;
}

export interface IConfig {
  objectCube: IObject;
  objectCone: IObject;
  objectDodecahedron: IObject;
}

const ConfigContext = createContext<IConfigContext | null>(null);
const userFirebaseAll = auth().currentUser;

const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState<IConfig>();

  const {dispatch} = useNavigation();

   useEffect(() => {
    async function loadConfig(): Promise<void> {
     auth().onAuthStateChanged((userFirebase) => {
      if (userFirebase) {
        listenData(userFirebaseAll?.uid ?? '');
        } else {
        console.log('Connect not working');
        }
      });
    }

    loadConfig();
  }, []);

  const listenData = useCallback(
    async(id: string) => {
        database()
        .ref(`/users/${id}`)
        .once('value')
        .then(snapshot => {
          console.log(snapshot.val());
          setConfig(
              {objectCube: snapshot.val().objectCube,
                objectCone:  snapshot.val().objectCone,
                objectDodecahedron: snapshot.val().objectDodecahedron});
        }).catch(() => {
          setConfig({objectCube: {}, objectCone: {}, objectDodecahedron: {}});
        }
        );
    },
    [],
  );

  const resetConfig = useCallback(
    async() => {
      setConfig({objectCube: {}, objectCone: {}, objectDodecahedron: {}});
    },
    [],
  );

  const saveConfig = useCallback(
    async(configStored: IConfig, id: string) => {
        database()
         .ref(`/users/${id}`)
        .set(configStored)
        .then(() => {
          setConfig(configStored);
          ToastAndroid.show('Salvo com sucesso!', ToastAndroid.SHORT);
          dispatch(StackActions.pop(1));
          console.log('Data set.');});
    },
    [],
  );

  const value = React.useMemo(
    () => ({ listenData, saveConfig, resetConfig,  config }),
    [listenData, saveConfig, resetConfig, config],
  );

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};

function useConfig(): IConfigContext {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }

  return context;
}

export {ConfigProvider, useConfig};
